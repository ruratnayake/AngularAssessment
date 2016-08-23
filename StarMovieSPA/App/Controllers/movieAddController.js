(function (angular) {

    'use strict';

    var controllerId = 'movieAddCtrl';

    angular
        .module('app')
        .controller(controllerId, ['$scope', '$stateParams', '$log', 'movieSvc', function (scope, stateParams, logger, movieSvc) {
            var vm = this;

            init()

            // controller init functionality
            function init() {
                vm.title = 'Create Movie';
                vm.movie = {};
                vm.newCharacter = {};
                vm.movieCast = [];
                logger.log('Controller loaded.', controllerId);
            }

            // save movie (main details functionality/ handles update also
            vm.saveMovieDetails = function () {
                // set form submit, to display error messages
                vm.movieDetailForm.$submitted = true;
                // save movie if form is valid
                if (vm.movieDetailForm.$valid) {
                    movieSvc.add(vm.movie);
                }
            }

            // save character, as not interacting with server call item update will take place on each trigger
            vm.saveCharacter = function () {
                //check both forms are valid before character update
                if (vm.movieDetailForm.$valid && vm.charactersForm.$valid) {
                    vm.movieCast.push({ Role: vm.newCharacter.Role, Actor: vm.newCharacter.Actor });
                    movieSvc.update({ Id: vm.movie.Id, Cast: vm.movieCast });
                    vm.newCharacter = {};
                }
            }
        }]);

})(angular);