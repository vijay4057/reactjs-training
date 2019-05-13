"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(bookNumber, bookName, author, ratePerUnit) {
        this.bookName = bookName;
        this.bookNumber = bookNumber;
        this.author = author;
        this.ratePerUnit = ratePerUnit;
    }
    toString() {
        return `${this.bookName} - ${this.author}`;
    }
}
exports.default = Book;
let es6 = new Book(100, "B1", "A1", 100);
console.log(es6.toString());
exports.authorLst = [];
