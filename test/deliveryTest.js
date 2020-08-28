const deliveryTest = require('ava');
const {deliveryDate} = require('../src/delivery');

function plusDays (time) {
    return time + 1;
}

deliveryTest('testcase 1 when deliveryDate with isRush is true and deliveryState is MA', t => {
    const isRush = true;
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: plusDays
        }
    }

    const result = deliveryDate(anOrder, isRush);
    t.is(result, 3);
})

deliveryTest('testcase 2 when deliveryDate with isRush is true and deliveryState is NH', t => {
    const isRush = true;
    const anOrder = {
        deliveryState: 'NH',
        placedOn: {
            plusDays: plusDays
        }
    }

    const result = deliveryDate(anOrder, isRush);
    t.is(result, 4);
})

deliveryTest('testcase 3 when deliveryDate with isRush is true and deliveryState is AS', t => {
    const isRush = true;
    const anOrder = {
        deliveryState: 'AS',
        placedOn: {
            plusDays: plusDays
        }
    }

    const result = deliveryDate(anOrder, isRush);
    t.is(result, 5);
})

deliveryTest('testcase 4 when deliveryDate with isRush is false and deliveryState is MA', t => {
    const isRush = false;
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: plusDays
        }
    }

    const result = deliveryDate(anOrder, isRush);
    t.is(result, 5);
})

deliveryTest('testcase 5 when deliveryDate with isRush is false and deliveryState is ME', t => {
    const isRush = false;
    const anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays: plusDays
        }
    }

    const result = deliveryDate(anOrder, isRush);
    t.is(result, 6);
})

deliveryTest('testcase 6 when deliveryDate with isRush is false and deliveryState is AS', t => {
    const isRush = false;
    const anOrder = {
        deliveryState: 'AS',
        placedOn: {
            plusDays: plusDays
        }
    }

    const result = deliveryDate(anOrder, isRush);
    t.is(result, 7);
})