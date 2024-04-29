//Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//get Summary
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author} was published in ${this.year}`;
};

//get Age
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

//Revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

//Instance of Book
const book1 = new Book("Book One", "Name Name", 2015);
const book2 = new Book("Book Two", "Name Name", 2020);

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
