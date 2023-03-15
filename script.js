const library = document.getElementById("library");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToMyLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

//Create HTML book card
function createBookCard(title, author, pages, read) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("bookCards");
  library.append(bookCard);

  let bookTitle = document.createElement("div");
  let bookAuthor = document.createElement("div");
  let bookPages = document.createElement("div");
  let isRead = document.createElement("button");
  let remove = document.createElement("button");

  bookTitle.className = "bookTitle";
  bookAuthor.className = "bookAuthor";
  bookPages.className = "bookPages";
  isRead.className = "isRead";
  remove.className = "removeBook";

  bookTitle.innerText = `"${title}"`;
  bookAuthor.innerText = author;
  bookPages.innerText = `${pages} pages`;
  isRead.innerText = read;
  remove.innerText = "Remove";

  if (isRead.innerText == "Read") {
    isRead.style.backgroundColor = "var(--green)";
  } else {
    isRead.style.backgroundColor = "var(--red)";
  }

  isRead.onclick = btnToggleRead;
  remove.onclick = removeCard;

  bookCard.append(bookTitle, bookAuthor, bookPages, isRead, remove);
}

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("titleField").value;
  let author = document.getElementById("authorField").value;
  let pages = document.getElementById("pagesField").value;
  let read =
    document.getElementById("readField").checked == true ? "Read" : "Not Read";

  addBookToMyLibrary(title, author, pages, read);
  createBookCard(title, author, pages, read);
  const modal = document.getElementById("newBookWindow");
  closeModal(modal);
});

//isRead button toggle read
function btnToggleRead() {
  if (this.innerText == "Not Read") {
    this.innerText = "Read";
    this.style.backgroundColor = "var(--green)";
  } else if (this.innerText == "Read") {
    this.innerText = "Not Read";
    this.style.backgroundColor = "var(--red)";
  }
}

function removeCard() {
  this.parentElement.remove();
}

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
