(function (angular) {
    'use strict';

    function MorrisDirective (eehMorris) {
        return {
            restrict: 'AE',
            template: '<div class="eeh-morris"></div>',
            scope: {
                config: '=',
                chartType: '='
            },
            link: function (scope, element) {
                scope.config.element = element.find('.eeh-morris');
                eehMorris[scope.chartType](scope.config);
            }
        };
    }

    angular.module('eehMorris').directive('eehMorris', MorrisDirective);

    function MorrisDonutDirective() {
        return {
            restrict: 'AE',
            template: '<eeh-morris config="config" chart-type="\'Donut\'"></eeh-morris>',
            scope: {
                config: '='
            }
        };
    }

    angular.module('eehMorris').directive('eehMorrisDonut', MorrisDonutDirective);

    function MorrisBarDirective () {
        return {
            restrict: 'AE',
            template: '<eeh-morris config="config" chart-type="\'Bar\'"></eeh-morris>',
            scope: {
                config: '='
            }
        };
    }

    angular.module('eehMorris').directive('eehMorrisBar', MorrisBarDirective);

    function MorrisLineDirective () {
        return {
            restrict: 'AE',
            template: '<eeh-morris config="config" chart-type="\'Line\'"></eeh-morris>',
            scope: {
                config: '='
            }
        };
    }

    angular.module('eehMorris').directive('eehMorrisLine', MorrisLineDirective);

    function MorrisAreaDirective () {
        return {
            restrict: 'AE',
            template: '<eeh-morris config="config" chart-type="\'Area\'"></eeh-morris>',
            scope: {
                config: '='
            }
        };
    }

    angular.module('eehMorris').directive('eehMorrisArea', MorrisAreaDirective);

})(angular);
