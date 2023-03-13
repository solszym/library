const library = document.getElementById("library");
const addBookBtn = document.querySelector("[data-modal-target]");
const overlay = document.getElementById("overlay");

addBookBtn.addEventListener("click", () => {
  const modal = document.querySelector(addBookBtn.dataset.modalTarget);
  openModal(modal);
});

overlay.addEventListener("click", () => {
  const modal = document.querySelector("#newBookWindow.active");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

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
