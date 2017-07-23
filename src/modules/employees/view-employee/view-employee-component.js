import angular from 'angular';
import employeeServiceMod from '../services/employee-service';
import smartTableComp from '../components/smart-table-component';
import smartTableSearchComp from '../components/smart-table-search-component';

const mod = angular.module('ngfun.view.employee.component', [employeeServiceMod, smartTableComp, smartTableSearchComp]);

export default mod.name;

mod.component('viewEmployee', {
  template: require('./view-employee.html'),
  controller: ['employeeService', '$sce', '$location', function(employeeService, $sce, $location) {
    let ctrl = this;

    ctrl.result = '';
    ctrl.employeeList = [];
    ctrl.department = '';
    ctrl.firstName = '';
    ctrl.lastName = '';

    function setResult(result) {
      ctrl.result = $sce.trustAsHtml(result);
    }

    ctrl.onSortByKey =  (key, descending) => {
        ctrl.employeeList = employeeService.sortEmployeeBy(key, descending);
    }

    ctrl.onSearchParamChanged =  (searchParams) => {
        ctrl.employeeList = employeeService.getEmployeesByFilter(searchParams);
    }

    ctrl.addEmployee = () => {
          $location.path('/addEmployee');
    }

    ctrl.returnAllEmployees = () => {
          return employeeService.getAllEmployees();
    };

    ctrl.getAllEmployees = () => {
          ctrl.employeeList = employeeService.getAllEmployees();
    };

    ctrl.deleteEmployee = (employee) => {
          ctrl.employeeList = employeeService.deleteEmployee(employee);
    };

    ctrl.getAllEmployees();

  }],
});

