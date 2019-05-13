import Book from './book'

//For Non default
import { authorLst } from './book'

let book = new Book(1254, "Book1", "Author1", 123456);

console.log(book)
console.log(authorLst);


function spreadLiteral(book: Book, authorLst: string[]): void {
    //Destructuring object
    const { bookName, ratePerUnit } = book;
    console.log(ratePerUnit);
    console.log(bookName);
    console.log(authorLst);

    //Destructuing array
    const [bestAuthor] = authorLst;
    console.log(bestAuthor);

}
spreadLiteral(book, ['ty', 'ts']);