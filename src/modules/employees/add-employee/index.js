import angular from 'angular';
import ngRoute from 'angular-route';
import addEmployeeComp from './add-employee-component';

const mod = angular.module('ngfun.add.employee', [ngRoute, addEmployeeComp]);

export default mod.name;

mod.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/addEmployee', {
    template: '<add-employee></add-employee>',
  });
}]);


