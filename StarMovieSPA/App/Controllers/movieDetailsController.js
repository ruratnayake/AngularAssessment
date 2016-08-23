(function (angular) {

   'use strict';

    var controllerId ='movieDetailsCtrl';

    angular
        .module('app')
        .controller(controllerId, ['$stateParams', '$log', 'movieSvc', function (stateParams, logger, movieSvc) {

            var vm = this;

            init();

            // controller init functionality
            function init() {
                // reterive the movie details of the movie match with the id received from routing
                vm.movies = movieSvc.get(stateParams.Id);
                vm.movie = vm.movies[0];

                logger.log('Controller loaded.', controllerId);
            }
        }]);

})(angular);