export default class Book {
    private bookNumber: number;
    public bookName: string;
    private author: string;
    public ratePerUnit: number;


    constructor(bookNumber: number, bookName: string, author: string, ratePerUnit: number) {
        this.bookName = bookName;
        this.bookNumber = bookNumber;
        this.author = author;
        this.ratePerUnit = ratePerUnit;

    }

    toString(): string {
        return `${this.bookName} - ${this.author}`;

    }
}

let es6 = new Book(100, "B1", "A1", 100);
console.log(es6.toString());

export const authorLst = [];