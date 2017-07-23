import angular from 'angular';
import ngRoute from 'angular-route';
import codeChallengeMod from './code-challenge-component';
import listItemMod from './listItem.directive';


import employeesMod from '../employees'; // Import all the employees modules


const app = angular.module('ngfun.code.challenge.app', [ngRoute, codeChallengeMod, listItemMod, employeesMod]);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: '<code-challenge-app></code-challenge-app>',
    }).otherwise({
      redirectTo: '/',
    });

    $locationProvider.html5Mode(true);
  },
]);


