import angular from 'angular';

const mod = angular.module('ngfun.code.challenge.listitem.directive', []);

export default mod.name;

// Decorate the <li> element with some additional behaviour...
mod.directive('li', () => ({
  restrict: 'E',
  scope: false,
  link: (scope, element) => {
    const toggleStrikethrough = () => {
      element.toggleClass('strikethrough'); // Defined in app.styl
    };

    element.on('click', toggleStrikethrough);

    scope.$on('destroy', () => element.off('click', toggleStrikethrough));
  },
}));
