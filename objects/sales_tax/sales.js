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

//Function to reduce sales down to one total number.
const salesTotals = function () {
  return company.sales.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};
//Function to calculate the total tax owed. Takes in a total number from salesTotals function.
const taxTotals = function (salesTotals, companyTaxRate) {
  const taxTotals = salesTotals * companyTaxRate;
  return taxTotals;
};

const calculateSalesTax = function (companySalesData, taxRates) {
  //creat empty object
  resultObj = {};
  //iterate through each object within companySalesData
  for (company of companySalesData) {
    //Assigns a key named company.name (i.e. Telus, or Bombardier) which is it's own object
    // Set company.name's keys to totalSales and totalTaxes and their values to 0 OUTSIDE of the next for loop
    resultObj[company.name] = {
      totalSales: 0,
      totalTaxes: 0,
    };
  }
  //Loop through each object within companySalesData again once our initial object has been created
  for (company of companySalesData) {
    //Increment the totalSales key by running the salesTotals function on the sales array within companySalesData.
    (resultObj[company.name].totalSales += salesTotals(company.sales)),
      //Increment the totalTaxes key by running taxTotals function with the total number from the previous run of salesTotals, and selecting the applicable
      // tax rate from the taxRates parameter in the parent function
      (resultObj[company.name].totalTaxes += taxTotals(
        salesTotals(companySalesData),
        taxRates[company.province]
      ));
  }
  return resultObj;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected Results:
  {
    Telus: {
      totalSales: 1300,
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */
