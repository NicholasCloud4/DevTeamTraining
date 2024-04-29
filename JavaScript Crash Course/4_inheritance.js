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

//Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine object
const mag1 = new Magazine("Mag One", "Name Name", 2020, "August");
console.log(mag1);

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
