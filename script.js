angular.module('language', []);

var Module = angular.module('language');

Module.controller('languageController', ['$scope',
  function(scope) {
    scope.items = [{
      id: 0,
      title: 'ROR'
    }, {
      id: 1,
      title: 'PHP'
    }, {
      id: 2,
      title: 'JAVA'
    }, {
      id: 3,
      title: 'IOS'
    }];
  }
]);

Module.directive('displayedItems', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      items: '=items'
    },
    controller: function ($scope) {
      var items = $scope.items || [];

  init();

  function init() {
    if ($scope.items.length > 0) $scope.items[0].selected = true;
  }

  $scope.selectItem = function(item) {
    angular.forEach(items, function(item) {
      item.selected = false;
    });
    item.selected = true;
  };

  $scope.addNewItem = function() {
    var i = {
      id: items.length,
      title: 'Đã thêm Item với id : ' + items.length
    };
    $scope.selectItem(i);
    items.push(i);
  };
    },
    template: '<div class="table table">' +
      '<div ng-transclude></div>' +
      '<div ng-repeat="item in items">' +
      '<div class="item-class" ng-class="{active: item.selected}">{{ item.title }} - id: {{ item.id }}' +
      ' <button class="btn" ng-disabled="item.selected" ng-click="selectItem(item)">Chọn</button>' +
      '</div>' +
      '</div>' +
      '<div><button ng-click="addNewItem()">Thêm ngôn ngữ khác</button></div>' +
      '</div>'
  };
});