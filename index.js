// Write your solution in this file!
// Task 1: Declare `customerName` in global scope
var customerName = 'bob';

// Task 2: Write `upperCaseCustomerName()` function
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Write `setBestCustomer()` function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Creates a global variable `bestCustomer`
}

// Task 4: Write `overwriteBestCustomer()` function
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Modifies the global `bestCustomer`
}

// Task 5: Declare `leastFavoriteCustomer` and write `changeLeastFavoriteCustomer()` function
const leastFavoriteCustomer = 'someone'; // Declare a constant in global scope

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error
}