import angular from 'angular';

const mod = angular.module('reece.employee.service', []);

export default mod.name;


mod.factory('employeeService', ['$location', '$filter', function($location, $filter) {
  let employees = [];
  let uniqueEmployeeID = 0;

  let service = {
    sortEmployeeBy (key, descending) {
        return $filter('orderBy')(employees, key + '.value', descending);
    },

    addEmployee(employee) {
        if (!employee.id.value)  {
            employee.id.value = uniqueEmployeeID++;
        }
        employees.push(employee);
        $location.path('/viewEmployee');
    },

    deleteEmployee(employee) {
        var index = employees.indexOf(employee);
        employees.splice(index, 1);
        return employees;
    },

    getAllEmployees() {
        return employees;
    },

    getEmployeesByFilter(filterParams) {
        return service.getAllEmployees().filter(function(employee) {

            let startsWith = (actual, expected) => {
                let lowerStr = (actual + "").toLowerCase();
                return lowerStr.indexOf(expected.toLowerCase()) === 0;
            };
            let valid = true;

            angular.forEach(employee, function(value, key) {
                if (filterParams[key]) {
                    valid = valid && startsWith(employee[key].value, filterParams[key]);
                }
            });
            return valid;
        });
    },


  };
  return service;
}]);
