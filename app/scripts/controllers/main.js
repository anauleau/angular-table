'use strict';

/**
 * @ngdoc function
 * @name angularTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTableApp
 */
angular.module('angularTableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
