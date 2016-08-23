(function (angular) {

    'use strict';

    var serviceId = 'movieSvc';

    angular
        .module('app')
        .factory(serviceId, ['$filter', '$log', function ($filter, logger) {

            var service
                , _movies = [];

            init();

            service = {
                get: get
                , newMovie: newMovie
                , add: add
                , update: update
            }

            return service;

            function init() {
                _movies = sm.movies;
                logger.log('Service loaded.', serviceId);
            }


            function get(id) {
                if (id) {
                    var movie = $filter('filter')(_movies, { Id: id });
                    return movie;
                } else {
                    return _movies;
                }
            }

            function newMovie() {
                return sm.movie;
            }

            function add(item) {
                if (item.Id)
                    update(item);
                else {
                    var movie = $filter('orderBy')(_movies, 'Id', true);
                    item.Id = movie[0].Id + 1;
                    item.ReleaseDate = new Date(item.ReleaseDate);
                    _movies.push(item);
                }
            }

            function update(item) {
                if (item.Id) {
                    angular.forEach(_movies, function (movie, index) {
                        if (movie.Id == item.Id) {
                            item.ReleaseDate = new Date(item.ReleaseDate);
                            movie = angular.extend(movie, item);
                            return true;
                        }
                    });
                }
                return false;
            }

        }]);

})(angular);