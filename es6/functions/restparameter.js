var Invoice1 = require('../invoice/invoice');

//Rest Parameter
// ... dot as array
function calculateTotal(...invoices) {
    let total = 0;
    invoices.forEach(invoice => {
        total += invoice.amt;
    });
    return total;
}

var invoice1 = new Invoice1(100, 'Vijay', 100);
var invoice2 = new Invoice1(101, 'Vijay1', 200);
var invoice3 = new Invoice1(102, 'Vijay2', 300);
//Instead of below commented code we can pass in comma separated
//var arr = {invoice1, invoice2, invoice3};
//let total1 = calculateTotal(arr);
let total1 = calculateTotal(invoice1, invoice2, invoice3);
console.log(total1);
let total2 = calculateTotal(invoice1);
console.log(total2);


