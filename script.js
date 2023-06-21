document.addEventListener("DOMContentLoaded", function () {
  let myLibrary = [];

  function Book(imageURL, title, author, pages, publishDate) {
    this.imageURL = imageURL;
    this.title = title;
    this.author = `by ${author}`;
    this.pages = `Pages: ${pages}`;
    this.publishDate = `Date Published: ${publishDate}`;
  }

  //Manually add book objects to myLibrary array
  let book1 = new Book(
    "https://m.media-amazon.com/images/I/41AkIg2fDcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    "The Creative Act: A Way of Being",
    "Rick Rubin",
    432,
    "2023"
  );
  let book2 = new Book(
    "https://m.media-amazon.com/images/I/51G1xSEMQQL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
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

    updateBookList();
  }

  // addBook();

  function updateBookList() {
    //Create bookListContainer element that will hold book list -reflects div
    const bookListContainer = document.getElementById("book-list");
    //Clear existing contents of book list container
    bookListContainer.textContent = "";
    //Loop through each book in myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      //Create new div element for each book
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");
      //Create img for each imageURL
      const imgElement = document.createElement("img");
      imgElement.src = book.imageURL;

      //Create h2 for each title
      const titleElement = document.createElement("p");
      titleElement.textContent = book.title;
      titleElement.classList.add("book-title");
      //Create p for each author
      const authorElement = document.createElement("p");
      authorElement.textContent = book.author;
      //create p for each pages
      const pagesElement = document.createElement("p");
      pagesElement.textContent = book.pages;
      //Create p for each publish date
      const publishDateElement = document.createElement("p");
      publishDateElement.textContent = book.publishDate;

      //Append the title, author, pages, date elements to book element
      bookElement.appendChild(imgElement);
      bookElement.appendChild(titleElement);
      bookElement.appendChild(authorElement);
      bookElement.appendChild(pagesElement);
      bookElement.appendChild(publishDateElement);
      //Append book element to book list container
      bookListContainer.appendChild(bookElement);
    }
  }
  updateBookList();
});
