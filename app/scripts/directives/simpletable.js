'use strict';

/**
 * @ngdoc directive
 * @name angularTableApp.directive:simpleTable
 * @description
 * # simpleTable
 */
angular.module('angularTableApp')
  .directive('simpleTable', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the simpleTable directive');
      }
    };
  });
