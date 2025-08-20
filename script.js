const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let hasRead = read ? "has read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${hasRead}`;
    };
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
console.log(theHobbit.info());