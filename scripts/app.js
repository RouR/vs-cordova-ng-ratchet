'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute', 'snap',
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
}]);
