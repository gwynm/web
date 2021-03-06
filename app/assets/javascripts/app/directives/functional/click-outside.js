angular.module('app').directive('clickOutside', ['$document', function($document) {
  return {
    restrict: 'A',
    replace: false,
    link: function($scope, $element, attrs) {

      let didApplyClickOutside = false;

      $element.bind('click', function(e) {
        didApplyClickOutside = false;
        if(attrs.isOpen) {
          e.stopPropagation();
        }
      });

      $document.bind('click', function(event) {
        // Ignore click if on SKAlert
        if(event.target.closest(".sk-modal")) {
          return;
        }
        if(!didApplyClickOutside) {
          $scope.$apply(attrs.clickOutside);
          didApplyClickOutside = true;
        }
      })
    }
  }
}]);
