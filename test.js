describe('Directive', function() {
  var elm, scope, fooBar;

  beforeEach(module('language'));

  beforeEach(function() {
    this.addMatchers({
      toHaveClass: function(cls) {
        this.message = function() {
          return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + cls + "'.";
        };

        return this.actual.hasClass(cls);
      }
    });
  });

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element(
      '<div>' +
      '{{ customMessage }}' +
      '<displayed-items data-items="items">' +
      '</displayed-items>' +
      '</div>');
    // elm = angular.element('<displayed-items data-items="items"></displayed-items>');
    scope = $rootScope.$new();

    scope.customMessage = '<div class="custom-message">abc</div>';
    scope.items = [{
      id: 1,
      title: 'title a'
    }, {
      id: 2,
      title: 'title b'
    }];
    scope.selectItem = function(item) {
    angular.forEach(scope.items, function(item) {
      item.selected = false;
    });
    item.selected = true;
  };
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should  have items and contains Langguas ', function() {
    var items = elm.find('.item-class');
    expect(items.length).toBe(2);
    expect(items.eq(0).text()).toContain('title a');
    expect(items.eq(1).text()).toContain('title b');
  });

  // it('should set active class on first item', function() {
  //   scope.$digest();
  //   var items = elm.find('div.item-class');

  //   expect(items.eq(0)).toHaveClass('active');
  //   expect(items.eq(1)).not.toHaveClass('active');
  // });

  // it('should change active item when edit button is clicked', function() {
  //   var items = elm.find('.item-class');

  //   items.eq(1).find('button').click();

  //   expect(items.eq(0)).not.toHaveClass('active');
  //   expect(items.eq(1)).toHaveClass('active');
  // });

  it('should disable/enable when click to button', function() {
    var items = elm.find('.item-class');
    expect(items.eq(1).find('button').attr('disabled')).toBeUndefined();
    items.eq(1).find('button').click();

    expect(items.eq(1).find('button').attr('disabled')).toBeTruthy();
  });
});