"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
//For Non default
const book_2 = require("./book");
let book = new book_1.default(1254, "Book1", "Author1", 123456);
console.log(book);
console.log(book_2.authorLst);
function spreadLiteral(book, authorLst) {
    //Destructuring object
    const { bookName, ratePerUnit } = book;
    console.log(ratePerUnit);
    console.log(bookName);
    console.log(authorLst);
    //Destructuing array
    const [goodAuthor] = authorLst;
    console.log(goodAuthor);
    //destructing and rest params
    const [bestAuthor, ...others] = authorLst;
    console.log(bestAuthor);
    console.log(others);
}
spreadLiteral(book, book_2.authorLst);
function spreadArray(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
spreadArray(...book_2.authorLst);
