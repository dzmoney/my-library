let myLibrary = [];

function Book(title, author, pages, publishDate) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publishDate = publishDate;
}

//Manually add book objects to myLibrary array
let book1 = new Book(
  "The Creative Act: A Way of Being",
  "Rick Rubin",
  432,
  "2023"
);
let book2 = new Book(
  "Women Who Run With The Wolves",
  "Clarissa Pinkola Estés",
  584,
  "1997"
);

myLibrary.push(book1, book2);

console.log(myLibrary);

function addBook() {
  //prompt user input, separate prompt for each property
  //store user input in separate variables
  let newTitle = prompt("Enter the book's title");
  let newAuthor = prompt("Enter the book's author");
  let newPages = prompt("Enter # of pages");
  let newPublishDate = prompt("Enter the book's publish date");

  //create new instance of book object using new
  //pass user variables as arguments into Book constructor
  let newBook = new Book(newTitle, newAuthor, newPages, newPublishDate);

  //push newBook to myLibrary Array
  myLibrary.push(newBook);

  // updateBookList();
}

// addBook();

function updateBookList() {
  //Get container element that will hold book list
  //Clear existing contents of book list container
  //Loop through each book in myLibrary array
  //Create new div element for each book
  //Create h2 for each title
  //Create p for each author
  //create p for each pages
  //Create p for each publish date
  //Append the title, author, pages, date elements to book element
  //Append book element to book list container
}
