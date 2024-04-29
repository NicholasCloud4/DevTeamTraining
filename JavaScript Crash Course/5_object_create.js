// Object Of Protos

const bookProtos = {
  getSummary: function () {
    return `${this.title} by ${this.author} was published in ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

//Create Object
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Name Name";
book1.year = "2013";

console.log(book1);
