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

console.log("Book ID:", myLibrary[0].id);
console.log(myLibrary[0].info()); 

