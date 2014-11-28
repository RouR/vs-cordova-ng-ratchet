'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
.directive('myrefresher', ['refresher', function (refresher) {

    return {

        restrict: 'A',
        compile: function (elem, attrs) {
            elem.addClass('refresher');

            return function (scope, elem, attrs) {
                refresher.render(attrs, scope, elem, attrs);
                refresher.attachEvent(attrs, scope, elem);

                scope.$on('refresher.load', function (ev, data) {
                    scope.refresherItems = data;
                });
            };
        }

    };
}]);
