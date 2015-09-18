angular.module('angular-carousel-loop')

  .directive('rnCarouselLoopDefaultIndex', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      scope: {
        slides: '=',
        index: '=rnCarouselIndex'
      },
      //templateUrl: 'carousel-indicators.html',
      link: function (scope, iElement, iAttributes) {
        var restartTimer = function () {
          var node_length = $(iElement[0]).children().length;
          if (iAttributes.rnCarouselLoopDefaultIndex == 0 || iAttributes.rnCarouselLoopDefaultIndex == parseInt(node_length, 10) - 1) {
            scope.$parent.pageRerender();
          }
        };
        scope.$watch('carouselIndex', restartTimer);
      }
    };
  }]);