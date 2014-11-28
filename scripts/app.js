'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute', 'snap', 'refresher', 'ngProgress',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
  $routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
  $routeProvider.when('/view3', { templateUrl: 'partials/partial3.html', controller: 'NotificationCtrl' });
  $routeProvider.when('/view4', { templateUrl: 'partials/partial4.html', controller: 'testData1Ctrl' });
  $routeProvider.when('/view5', { templateUrl: 'partials/partial4.html', controller: 'testData2Ctrl' });
  $routeProvider.when('/settings', { templateUrl: 'partials/settings.html', controller: 'settingsCtrl' });
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.config(["$provide", function ($provide) {
    
    $provide.decorator('refresher', ["$delegate", '$q', 'ngProgress', function ($delegate, $q, ngProgress) {
        // Save the original refresher.get()
        var origFnGet = $delegate.get;
        $delegate.get = function (url) {
            console.log('get from decorator');
            var q = $q.defer();
                       
                q.resolve([]);            

            return q.promise;

            // Call the original with the output prepended with formatted timestamp
            //origFn.apply(null, args);
        };

        var origFnRquest = $delegate.request;
        $delegate.request = function (attr, scope) {
            console.log('request from decorator');
            var args = [].slice.call(arguments);

            console.log('decorator scope', scope.testmsg);
            ngProgress.start();
            if (scope.onRefresh != undefined) {
                scope.onRefresh(scope);
            }

            // Call the original with the output prepended with formatted timestamp
            origFnRquest.apply(this, args);
        };

        var origFnrender = $delegate.render;
        $delegate.render = function (attr, scope, elem) {
            console.log('render from decorator');
            var args = [].slice.call(arguments);

            // Call the original with the output prepended with formatted timestamp
            origFnrender.apply(this, args);
        };

        var origFnremove = $delegate.remove;
        $delegate.remove = function () {
            console.log('remove from decorator');
            var args = [].slice.call(arguments);

            ngProgress.complete();

            // Call the original with the output prepended with formatted timestamp
            origFnremove.apply(this, args);
        };

        var origFntstartPull = $delegate.startPull;
        $delegate.startPull = function (ev, attr, scope, elem) {
            console.log('startPull from decorator');
            var args = [].slice.call(arguments);

            // Call the original with the output prepended with formatted timestamp
            origFntstartPull.apply(this, args);
        };

        var origFntranslateY = $delegate.translateY;
        $delegate.translateY = function (target, y) {
            console.log('translateY from decorator');
            var args = [].slice.call(arguments);

            ngProgress.set(y);

            // Call the original with the output prepended with formatted timestamp
            origFntranslateY.apply(this, args);
        };

        return $delegate;
    }]);
}]);
