const content = document.getElementById("content");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {}

const hobbit = new Book("hobbit", "tolkien", 294, true);

addBookToLibrary(hobbit);
console.log(myLibrary);
