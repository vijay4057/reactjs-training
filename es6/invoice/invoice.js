
class Invoice {

    constructor(id, name, amt) {
        this.id = id;
        this.name = name;
        this.amt = amt;

    }
    toString() {
        return `${this.id}, ${this.name},
        ${this.amt}
        discount = ${this.amt / 100}%`
    }
}
module.exports = Invoice;
var calculate = require('../calculate');
console.log(calculate(10, 30));

var invoice = new Invoice('123', 'Vijay', 100);
console.log(invoice.toString())