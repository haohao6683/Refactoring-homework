function printOwing (invoice) {
  let result = '';
  let outstanding = 0;
  result += '***********************';
  result += '**** Customer Owes ****';
  result += '***********************';

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  result += `name: ${invoice.customer}`;
  result += `amount: ${outstanding}`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;

  return result;
}

module.exports = {
    printOwing
};
