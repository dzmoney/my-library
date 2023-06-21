document.addEventListener("DOMContentLoaded", function () {
  //create myLibrary array
  let myLibrary = [];

  function Book(imageURL, title, author, pages, publishDate) {
    this.imageURL = imageURL;
    this.title = title;
    this.author = `by ${author}`;
    this.pages = `${pages} pages`;
    this.publishDate = publishDate;
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

  function showAddBookForm() {
    //Get form element
    const formElement = document.getElementById("add-book-form");
    //Display form  element by setting display to block
    formElement.style.display = "block";
  }

  const addBookBtn = document.getElementById("add-book-btn");
  addBookBtn.addEventListener("click", showAddBookForm);

  function submitBookForm(event) {
    //prevent default
    event.preventDefault();
    //Get input elements for each book property
    const formImgInput = document.getElementById("form-imageUrl-input");
    const formTitleInput = document.getElementById("form-title-input");
    const formAuthorInput = document.getElementById("form-author-input");
    const formPagesInput = document.getElementById("form-pages-input");
    const formPublishDateInput = document.getElementById(
      "form-publishDate-input"
    );
    //Retrieve values input from user
    const newImage = formImgInput.files[0];
    const newTitle = formTitleInput.value;
    const newAuthor = formAuthorInput.value;
    const newPages = formPagesInput.value;
    const newPublishDate = formPublishDateInput.value;
    //Check if all input values are valid (if statement)
    if (newImage && newTitle && newAuthor && newPages && newPublishDate) {
      //Create FileReader to read image file
      const reader = new FileReader();
      reader.onload = function () {
        const imageUrl = reader.result;
        //Create new book object
        let newBook = new Book(
          imageUrl,
          newTitle,
          newAuthor,
          newPages,
          newPublishDate
        );
        //Add book to library
        myLibrary.push(newBook);
        //Update book list on the page
        updateBookList();
        //Reset form by clearing input field
        formImg.value = "";
        formTitleInput.value = "";
        formAuthorInput.value = "";
        formPagesInput.value = "";
        formPublishDateInput.value = "";
        //Get form element
        const formElement = document.getElementById("add-book-form");
        //Hide for element - display none
        formElement.style.display = "none";
      };
      //Read selected image file as data URL
      reader.readAsDataURL(newImage);
    }
  }

  const form = document.getElementById("form");
  form.addEventListener("click", submitBookForm);

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

      //Create elements for rest of book properties
      const titleElement = document.createElement("p");
      titleElement.textContent = book.title;
      titleElement.classList.add("book-title");

      const authorElement = document.createElement("p");
      authorElement.textContent = book.author;

      const pagesElement = document.createElement("p");
      pagesElement.textContent = book.pages;

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
