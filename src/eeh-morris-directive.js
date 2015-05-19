(function (angular) {
    'use strict';

    angular.module('eehMorris').directive('eehMorris', function (eehMorris) {
        return {
            restrict: 'AE',
            scope: {
                config: '=',
                chartType: '='
            },
            link: function (scope, element) {
                scope.config.element = element;
                eehMorris[scope.chartType](scope.config);
            }
        };
    });

    angular.module('eehMorris').directive('eehMorrisBar', function () {
        return {
            restrict: 'AE',
            template: '<eeh-morris config="config" chart-type="\'Bar\'"></eeh-morris>',
            scope: {
                config: '='
            }
        };
    });
})(angular);
