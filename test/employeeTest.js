const employeeTest = require('ava');
const {Employee} = require('../src/employee');

employeeTest('test case 1 when employee with name Draymond and type engineer', t => {
    const employee = new Employee('Draymond', 'engineer');
    const result = employee.toString();
    t.is(result, 'Draymond (engineer)');
})

employeeTest('test case 2 when employee with name Draymond and type unknown', t => {
    try {
        const employee = new Employee('Draymond', 'unknown');
        t.fail();
    } catch (e) {
        t.is(e.message, 'Employee cannot be of type unknown');
    }
})