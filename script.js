const myLibrary = [];

function Book(id, title, author, pages, hasRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function () {
    let read = hasRead ? "already read" : "not read yet";
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
  let id = crypto.randomUUID();
  myLibrary.push(new Book(id, title, author, pages, hasRead));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Diary of a Young Girl", "Anne Frank", 256, false);
addBookToLibrary("Romeo and Juliet", "William Shakespeare", 301, false);

for (const book of myLibrary) {
  const cardContainer = document.querySelector(".card-container");

  const card = document.createElement("div");
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
  status.textContent = "Status: " + book.hasRead;
  status.classList.add("card-content");
  status.classList.add("book-status");

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(status);

  cardContainer.appendChild(card);
}



