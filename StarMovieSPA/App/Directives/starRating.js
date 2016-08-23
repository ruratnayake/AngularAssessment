/*Custom directive create for display rating in stars*/
(function (angular) {

    'use strict';

    var directiveId = 'starRatingDisplay';

    angular
        .module('starRateing', [])
        .directive(directiveId, ['$log', function (logger) {
            return {
                restrict: 'AE',
                scope: {
                    rating: '='
                },
                template: "<span ng-repeat='i in arr1 track by $index' class='a'></span><span ng-repeat='i in arr2 track by $index' class='b'></span>",
                link: function (scope, element, attrs) {
                    init();

                    function init() {
                        scope.options = {};
                        if (attrs.maxRating == undefined) {
                            logger.warn(directiveId, 'Options has not defined max property value and it has been set to its default value 10.');
                            scope.options.max = 10;
                        } else {
                            scope.options.max = attrs.maxRating;
                        }
                        if (scope.rating == undefined || parseInt(scope.rating) == 'NaN') {
                            logger.warn(directiveId, 'model has not been assigined, rate is set as to zero.');
                            scope.options.rate = 0
                        } else {
                            scope.options.rate = scope.rating;
                        }
                        setRating();
                    }

                    function setRating(val) {
                        if (!val)
                            val = scope.options.rate;
                        scope.arr1 = new Array(parseInt(val))
                        scope.arr2 = new Array(parseInt(scope.options.max - val));
                    }

                }

            }
        }]);

})(angular);

