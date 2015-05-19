(function (angular) {
    'use strict';

    function MorrisService ($window) {
        if (angular.isUndefined($window.Morris)) {
            throw 'Include the jQuery.flot plugin.';
        }
        return $window.Morris;
    }

    angular.module('eehMorris').service('eehMorris', MorrisService);
})(angular);
