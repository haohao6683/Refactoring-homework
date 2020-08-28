function voyageRisk (voyage) {
  let result = 1;
  result += (voyage.length > 4) ? 2 : 0;
  result += (voyage.length > 8) ? (voyage.length - 8) : 0;
  result += (['china','east-indies',].includes(voyage.zone)) ? 4 : 0;
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  result += (history.length < 5) ? 4 : 0;
  result += history.filter(v => v.profit < 0).length;
  result -= (voyage.zone === 'china' && hasChina(history)) ? 2 : 0;
  return Math.max(result, 0);
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  result += (voyage.zone === 'china' || voyage.zone === 'east-indies') ? 1 : 0;
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    result += (history.length > 10) ? 1 : 0;
    result += (voyage.length > 12) ? 1 : 0;
    result -= (voyage.length > 18) ? 1 : 0;
  }
  else {
    result += (history.length > 8) ? 1 : 0;
    result -= (voyage.length > 14) ? 1 : 0;
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return (vpf * 3 > (vr + chr * 2)) ? 'A' : 'B';
}

module.exports = {
    rating,
    voyageProfitFactor
};

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
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
