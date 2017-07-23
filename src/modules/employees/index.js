import angular from 'angular';
import viewEmployeeMod from './view-employee';
import addEmployeeMod from './add-employee';

const mod = angular.module('ngfun.employees', [viewEmployeeMod, addEmployeeMod]);

export default mod.name;
