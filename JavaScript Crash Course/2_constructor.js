//Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} by ${this.author} was published in ${this.year}`;
  };
}

//Instance of Book
const book1 = new Book("Book One", "Name Name", 2015);
const book2 = new Book("Book Two", "Name Name", 2020);

console.log(book1.getSummary());
console.log(book2.getSummary());
