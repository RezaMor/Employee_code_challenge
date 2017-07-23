import angular from 'angular';
import fieldViewerMod from './field-viewer-component';
import formViewerMod from './form-viewer-component';
import employeeServiceMod from '../services/employee-service';

const mod = angular.module('ngfun.add.employee.component', [fieldViewerMod, formViewerMod, employeeServiceMod]);

export default mod.name;

mod.component('addEmployee', {
  template: require('./add-employee.html'),
    controller: ['employeeService', '$sce', function(employeeService, $sce) {
    let ctrl = this;
        ctrl.employee = {
            id: {value: '', label: 'ID'},
            firstName: {value: '', label: 'First Name'},
            lastName: {value: '', label: 'Last Name'},
            department: {value: '', label: 'Department'},
            phoneNumber: {value: '', label: 'Phone Number'}
        };

        ctrl.submitHandler = function(addEmployeeForm) {
      // Not ideal - this should be a directive which calls a callback function, as "addEmployeeForm" belongs to the view
      if (addEmployeeForm.$valid) {
          employeeService.addEmployee(ctrl.employee);
      }
    };
  }],
});
