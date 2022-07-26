function readingList(books) {
  let bookList = document.createElement("ul");
  const content = document.querySelector("#content")
  content.appendChild(bookList);

  books.forEach(book => {
    let bookTitleAndAuthor = document.createElement("p");
    bookTitleAndAuthor.innerText = `${book.title} by ${book.author}`;

    let bookCover = document.createElement("img");
    bookCover.src = book.bookCoverImage;

    let bookListValue = document.createElement("li");
    bookListValue.appendChild(bookTitleAndAuthor);
    bookListValue.appendChild(bookCover);
    bookList.appendChild(bookListValue);

    bookListValue.className = (book.alreadyRead === true) ? "color-read" : "color-not-read";
  });
};

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);