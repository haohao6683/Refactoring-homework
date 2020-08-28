function deliveryDate (anOrder, isRush) {
  let deliveryTime;
  let value;
  if (isRush) {
    value = 1;
    deliveryTime = (['MA','CT',].includes(anOrder.deliveryState)) ? 1
                            : (['NY','NH',].includes(anOrder.deliveryState)) ? 2 : 3;
  }
  else {
    value = 2;
    deliveryTime = (['MA','CT','NY',].includes(anOrder.deliveryState)) ? 2
                            : (['ME','NH',].includes(anOrder.deliveryState)) ? 3 : 4;
  }
  return anOrder.placedOn.plusDays(value + deliveryTime);
}

module.exports = {
    deliveryDate
};
