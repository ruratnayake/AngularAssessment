(function (angular) {

    'use strict';

    var controllerId = 'movieListCtrl';

    angular
        .module('app')
        .controller(controllerId, ['$log', 'movieSvc', function (logger, movieSvc) {
            var vm = this;

            init();

            // controller init functionality
            function init() {
                // get all movies from movie service
                var _movies = movieSvc.get();

                //temp fix: to fix date format is being not saved properly in the service
                angular.forEach(_movies, function (item, index) {
                    if (!angular.isDate(item.ReleaseDate)) {
                        item.ReleaseDate = new Date(item.ReleaseDate);
                    }
                });

                vm.movies = _movies;
                logger.log('Controller loaded.', controllerId);
            }

            vm.getDate = function (date) {
                try {
                    return new Date(date);
                } catch (e) {
                    logger.error('Error converting date (' + date + ')', e);
                    return date;
                }

            }

        }]);

})(angular);