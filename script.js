const library = document.getElementById("library");

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

// const hobbit = new Book("hobbit", "tolkien", 294, true);

// addBookToLibrary(hobbit);
// console.log(myLibrary);

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("titleField").value;
  let author = document.getElementById("authorField").value;
  let pages = document.getElementById("pagesField").value;
  let read = document.getElementById("readField").value;

  addBookToLibrary(title, author, pages, read);
  const modal = document.getElementById("newBookWindow");
  closeModal(modal);
});

//Modal book window popping up
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
