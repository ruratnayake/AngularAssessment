(function (angular) {

    'use strict';

    angular
        .module('app', [
            //inject dependencies
            'ui.router'
            , 'starRateing'
            , 'moment-picker'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: 'App/Templates/MoviesHome.html'
                }).state('about', {
                    url: '/about',
                    templateUrl: 'App/Templates/about.html'
                }).state('new-movie', {
                    url: '/new-movie',
                    templateUrl: 'App/Templates/MovieAdd.html'
                }).state('movie-detail', {
                    url: '/movie/:Id',
                    templateUrl: 'App/Templates/MovieDetail.html'
                });
        }])
     .config(['momentPickerProvider', function (momentPickerProvider) {
         momentPickerProvider.options({
             locale: 'en'
             , today: true
             , 'max-view' : 'year'
             , 'start-view' : 'year'

         });
     }]);

})(angular);