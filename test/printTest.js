const printTest = require('ava');
const {printOwing} = require('../src/print');

printTest('test case 1 when printOwing given invoice.name has nothing', t => {
    let invoice = {
        borderSpacing: [
            {amount: 1},
            {amount: 2}
        ]
    }
    const result = printOwing(invoice);
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    t.is(result, '***********************' +
                  '**** Customer Owes ****' +
                  '***********************' +
                  'name: undefined' +
                  'amount: 3' +
                  `amount: ${dueDate.toLocaleDateString()}`);
})

printTest('test case 2 when printOwing given invoice has name Draymond.', t => {
    let invoice = {
        customer: 'Draymond',
        borderSpacing: [
            {amount: 1},
            {amount: 2}
        ]
    }
    const result = printOwing(invoice);
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    t.is(result, '***********************' +
                  '**** Customer Owes ****' +
                  '***********************' +
                  'name: Draymond' +
                  'amount: 3' +
                  `amount: ${dueDate.toLocaleDateString()}`);
})