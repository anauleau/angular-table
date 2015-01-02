
angular.module('anauleau.simpleTable', [])
  .directive('simpleTable', function() {
    'use strict';
    return {
      restrict: 'EAC',
      scope: {
        rows: '=',
        columns: '='
      },
      templateUrl: 'simple-table.html'
    };
  });
