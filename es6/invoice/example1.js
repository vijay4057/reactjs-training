var Invoice = require('./Invoice');
var invoice = new Invoice(101, "Vijay", 100);
console.log(invoice.toString());

var calculate = require('./calculate');
console.log(calculate(10, 20));
