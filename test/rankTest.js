const rankTest = require('ava');
const {rating} = require('../src/rank');

rankTest('ranking case 1 for rating when voyage.zone is west-indies should be B', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };

  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = rating (voyage, history);

  t.is(result, 'B');
});

rankTest('ranking case 2 for rating when voyage.zone is china should be A', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };

  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = rating (voyage, history);

  t.is(result, 'A');
});
