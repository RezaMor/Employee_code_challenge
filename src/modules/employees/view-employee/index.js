import angular from 'angular';
import ngRoute from 'angular-route';
import viewEmployeeComp from './view-employee-component';

const mod = angular.module('ngfun.view.employee', [ngRoute, viewEmployeeComp]);

export default mod.name;

mod.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/viewEmployee', {
    template: '<view-employee></view-employee>',
  });
}]);


