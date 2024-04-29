// const s = "Hello world!";
// console.log(typeof s);

// const s2 = new String("Hello world!");
// console.log(typeof s2);

// console.log(window);
// window.alert(1);

//Object literal
const book1 = {
  title: "Book One",
  author: "Name Name",
  year: 2015,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

const book2 = {
  title: "Book One",
  author: "Name Name",
  year: 2015,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

console.log(book1);
console.log(Object.values(book2));
