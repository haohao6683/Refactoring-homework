function calOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function calDueDate() {
   const today = new Date();
   return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing (invoice) {
  let result = '';
  let outstanding = 0;
  result += '***********************';
  result += '**** Customer Owes ****';
  result += '***********************';

  outstanding = calOutstanding(invoice);
  invoice.dueDate = calDueDate();

  // print details
  result += `name: ${invoice.customer}`;
  result += `amount: ${outstanding}`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;

  return result;
}

module.exports = {
    printOwing
};
