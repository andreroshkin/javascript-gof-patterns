class Book {
    title: any;
    author: any;
    isbn: any;
    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const addBook = (title: string, author: string, isbn: string, availability: boolean, sales: number) => {
    const book = {
        ...createBook(title, author, isbn),
        sales,
        availability,
        isbn,
    };

    bookList.push(book);
    return book;
};

const createBook = (title: any, author: any, isbn: any) => {
    const existingBook = books.has(isbn);

    if (existingBook) {
        return books.get(isbn);
    }

    const book = new Book(title, author, isbn);
    books.set(isbn, book);
    return book;
};

const books = new Map();
const bookList: any[] = [];

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", books.size);
