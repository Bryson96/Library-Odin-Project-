function Book(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
  this.info = function() {
    return ${this.title} by ${this.author}, ${this.numberOfPages}, ${this.haveRead});
}

const theHobbit = new Book("The Hobbit", "J.R. Tolkien", 635, read);
console.log(theHobbit.info());
