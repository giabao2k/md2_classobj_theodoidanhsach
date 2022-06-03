"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let book1 = new Book_1.Book('tat den', 'ngotuatto', true);
let book2 = new Book_1.Book('jav', 'tokuda', false);
let books = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyread) {
        console.log('You already read "' + bookInfo);
    }
    else {
        console.log('You still need to read "' + bookInfo);
    }
}
