const myLibrary = [];

function Book(id, title, author, pages, hasRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function () {
    let read = this.hasRead ? "already read" : "not read yet";
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };

  this.toggleStatus = function () {
    this.hasRead = !this.hasRead;
  }
}

function addBookToLibrary(title, author, pages, hasRead) {
  let id = crypto.randomUUID();
  myLibrary.push(new Book(id, title, author, pages, hasRead));
}


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Diary of a Young Girl", "Anne Frank", 256, false);
addBookToLibrary("Romeo and Juliet", "William Shakespeare", 301, false);

function displayBooks() {
  for (const book of myLibrary) {
    const cardContainer = document.querySelector(".card-container");

    const card = document.createElement("div");
    card.setAttribute("id", book.id);
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = book.title
    title.classList.add("card-title");

    const author = document.createElement("p");
    author.textContent = "Author: " + book.author;
    author.classList.add("card-content");
    author.classList.add("book-author");

    const pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;
    pages.classList.add("card-content");
    pages.classList.add("book-pages");

    const status = document.createElement("p");
    status.textContent = "Status: " + (book.hasRead ? "Read" : "Not read yet");
    status.classList.add("card-content");
    status.classList.add("book-status");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove Book";
    deleteBtn.classList.add("card-delete-button")

    deleteBtn.addEventListener('click', function (e) {
      const parent = e.target.closest('[id]');
      parent.remove();
    });

    const statusBtn = document.createElement("button");
    statusBtn.textContent = book.hasRead ? "Mark as Unread" : "Mark as Read"
    statusBtn.classList.add("card-status-update");

    statusBtn.addEventListener('click', () => {
      book.toggleStatus();

      status.textContent = "Status: " + (book.hasRead ? "Read" : "Not read yet");
  
      statusBtn.textContent = book.hasRead ? "Mark as Unread" : "Mark as Read";
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(deleteBtn);
    card.appendChild(statusBtn);


    cardContainer.appendChild(card);
  }
}

function addDisplayBook(book) {
  const cardContainer = document.querySelector(".card-container");
  const card = document.createElement("div");
  card.setAttribute("id", book.id);
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = book.title
  title.classList.add("card-title");

  const author = document.createElement("p");
  author.textContent = "Author: " + book.author;
  author.classList.add("card-content");
  author.classList.add("book-author");

  const pages = document.createElement("p");
  pages.textContent = "Pages: " + book.pages;
  pages.classList.add("card-content");
  pages.classList.add("book-pages");

  const status = document.createElement("p");
  status.textContent = "Status: " + (book.hasRead ? "read" : "not read yet");
  status.classList.add("card-content");
  status.classList.add("book-status");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove Book";
  deleteBtn.classList.add("card-delete-button")

  deleteBtn.addEventListener('click', function (e) {
    const parent = e.target.closest('[id]');
    parent.remove();
  });

  const statusBtn = document.createElement("button");
  statusBtn.textContent = book.hasRead ? "Mark as Unread" : "Mark as Read"
  statusBtn.classList.add("card-status-update");

  statusBtn.addEventListener('click', () => {
    book.toggleStatus();

    status.textContent = "Status: " + (book.hasRead ? "Read" : "Not read yet");
  
    statusBtn.textContent = book.hasRead ? "Mark as Unread" : "Mark as Read";
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(status);
  card.appendChild(deleteBtn);
  card.appendChild(statusBtn);

  cardContainer.appendChild(card);
}

displayBooks();

const dialog = document.querySelector("#dialog");
const dialogShowBtn = document.querySelector("#dialog-show");
const confirmBtn = document.querySelector(".dialog-submit");

const titleInput = document.querySelector("#title");

dialogShowBtn.addEventListener("click", () => {
  dialog.showModal();
});


confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = parseInt(document.querySelector('#pages').value);
  const hasRead = document.querySelector('input[name="status"]:checked').value === 'true';

  addBookToLibrary(title, author, pages, hasRead);
  addDisplayBook(myLibrary.at(-1));
  dialog.close();
});