// Calculate total sales and total tax per company
/* Create a function that takes in two parameters: salesData, taxRates DONE
Iterate over each object within companySalesData
Find it's name and create a nested object called ${name}
Find it's province (this will decide which item in salesTaxRates is used)
Combine all of it's sales and add that into the pre-created nested object
Multiply the total sales value by the TaxRate value for it's corresponding province
Return an object that has a nested object for each company being iterated over
Within each nested object, include the company name, it's total sales, and it's total tax
*/
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};
const companySalesData = [
  {
    name: 'Telus',
    province: 'BC',
    sales: [100, 200, 400],
  },
  {
    name: 'Bombardier',
    province: 'AB',
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: 'Telus',
    province: 'SK',
    sales: [500, 100],
  },
];

const finalResultObject = {};
const calculateSalesTax = function (salesData, taxRates) {
  //console.log(Object.entries(salesData));
  for (companies in salesData) {
    console.log(salesData[companies]);
  }
};

const salesTotals = function (salesArray) {
  return salesArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

const calculateTaxTotals = function (sales, taxRate) {
  return salesTotals(sales) * taxRate;
};

//console.log(calculateSalesTotals([100, 500, 400]));
console.log(calculateTaxTotals([100, 500, 400], 0.1));
//console.log(calculateSalesTax(companySalesData, salesTaxRates));
