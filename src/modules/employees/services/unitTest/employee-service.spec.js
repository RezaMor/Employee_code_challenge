import moduleUnderTest from '../employee-service';

describe('reece.employee.service', () => {
    let service;
    let aliceEmployee = {
        id: {
          value: 1,
          label: "ID"
        },
        firstName: {
            value: 'Alice',
            label: 'First Name'
        },
        lastName: {
            value: 'Sterling',
            label: 'Last Name'
        },
        department: {
            value: 'Computer',
            label: 'Department'
        },
        phoneNumber: {
            value: '04987970987',
            label: 'Phone Number'
        }
    };
    let minaEmployee = {
        id: {
            value: 2,
            label: "ID"
        },
        firstName: {
            value: 'Mina',
            label: 'First Name'
        },
        lastName: {
            value: 'Rj',
            label: 'Last Name'
        },
        department: {
            value: 'Microbiology',
            label: 'Department'
        },
        phoneNumber: {
            value: '0498797687',
            label: 'Phone Number'
        }
    };
    let johnEmployee = {
        id: {
            value: 3,
            label: "ID"
        },
        firstName: {
            value: 'John',
            label: 'First Name'
        },
        lastName: {
            value: 'Cusack',
            label: 'Last Name'
        },
        department: {
            value: 'Art',
            label: 'Department'
        },
        phoneNumber: {
            value: '0477665544',
            label: 'Phone Number'
        }
    };

  beforeEach(() => {
    angular.mock.module(moduleUnderTest);

    angular.mock.inject((employeeService) => {
      service = employeeService;
    });
  });


  describe('addEmployee()', () => {
    it('should push the employee into employees array', () => {
      service.addEmployee(johnEmployee);
      let result = service.getAllEmployees();
      expect(result[0]).toEqual(johnEmployee);
    });
  });

    describe('deleteEmployee()', () => {
      it('should delete the employee from employees array', () => {
        service.addEmployee(johnEmployee);
        service.addEmployee(aliceEmployee);

        let result = service.getAllEmployees();
        expect(result.length).toBe(2);

        service.deleteEmployee(aliceEmployee);
        result = service.getAllEmployees();
        expect(result[0]).toEqual(johnEmployee);
      });
    });

        describe('sortEmployeeBy()', () => {
            beforeEach( () => {
                service.addEmployee(johnEmployee);
                service.addEmployee(minaEmployee);
                service.addEmployee(aliceEmployee);
            });
            it('should sort employee by last name in alphabetical order', () => {
                let result = service.sortEmployeeBy('lastName', false);
                expect(result[0]).toEqual(johnEmployee);
                expect(result[1]).toEqual(minaEmployee);
                expect(result[2]).toEqual(aliceEmployee);
            });

            it('should sort employee by last name in reverse-alphabetical order', () => {
                let result = service.sortEmployeeBy('lastName', true);
                expect(result[0]).toEqual(aliceEmployee);
                expect(result[1]).toEqual(minaEmployee);
                expect(result[2]).toEqual(johnEmployee);
            });
        });


    describe('getEmployeesByFilter()', () => {
        beforeEach( () => {
            service.addEmployee(johnEmployee);
            service.addEmployee(minaEmployee);
            service.addEmployee(aliceEmployee);
        });
        it('should filter John by his department', () => {
            let result = service.getEmployeesByFilter({
                department : 'ar'
            });
            expect(result[0]).toEqual(johnEmployee);
        });

        it('should filter Mina by her department', () => {
            let result = service.getEmployeesByFilter({
                department : 'microbiology'
            });
            expect(result[0]).toEqual(minaEmployee);
            });
        });
    });
