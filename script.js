const booksPerPage = 10; // Number of books to display per page
let currentPage = 1; // Current page number
let booksData = []; // Array to store all books data
let filteredBooks = []; // Array to store filtered books data

const allBooks = [
  {
    title: "Let Us C++",
    author: "Yashwant Kanetkar",
    subject: "Programming Language",
    publishDate: "2022-01-01",
  },
  {
    title: "Let Us C",
    author: "Yashwant Kanetkar",
    subject: "Programming Language",
    publishDate: "2022-02-01",
  },
  {
    title: "Java for Dummies",
    author: "DurgaSir",
    subject: "Programming Language",
    publishDate: "2022-03-01",
  },
  {
    title: "Let's Learn Javascript",
    author: "Dennis Ritchie",
    subject: "Subject 2",
    publishDate: "2023-04-01",
  },
  {
    title: "Let's Learn Python",
    author: "Dennis Ritchie",
    subject: "Programming Language",
    publishDate: "2023-05-01",
  },
  {
    title: "Let's Learn Kotlin",
    author: "Dennis Ritchie",
    subject: "Front-end",
    publishDate: "2022-06-01",
  },
  {
    title: "Let's Learn Swift",
    author: "Dennis Ritchie",
    subject: "Front-end",
    publishDate: "2022-07-01",
  },
  {
    title: "Let's Learn HTML",
    author: "Dennis Ritchie",
    subject: "Subject 3",
    publishDate: "2022-08-01",
  },
  {
    title: "Let's Learn CSS",
    author: "Dennis Ritchie",
    subject: "Subject 1",
    publishDate: "2023-09-01",
  },
  {
    title: "Let's Learn Bootstrap",
    author: "Dennis Ritchie",
    subject: "Subject 2",
    publishDate: "2022-10-01",
  },
  {
    title: "Let's Learn React",
    author: "Dennis Ritchie",
    subject: "Subject 3",
    publishDate: "2022-11-01",
  },
  {
    title: "Let's Learn Nodejs",
    author: "Dennis Ritchie",
    subject: "Subject 1",
    publishDate: "2023-12-01",
  },
  {
    title: "Let's Learn Front-end",
    author: "Dennis Ritchie",
    subject: "Front-end",
    publishDate: "2023-01-01",
  },
  {
    title: "Let's Learn Back-end",
    author: "ADennis Ritchie",
    subject: "Front-end",
    publishDate: "2023-02-01",
  },
  {
    title: "Let's Learn Full-Stack",
    author: "Back-end",
    subject: "Front-end",
    publishDate: "2023-03-01",
  },
  {
    title: "Let us Java",
    author: "Yashwant Kanetkar",
    subject: "Subject 2",
    publishDate: "2023-04-01",
  },
  {
    title: "Let us Python",
    author: "Yashwant Kanetkar",
    subject: "Back-end",
    publishDate: "2023-05-01",
  },
  {
    title: "Let us JavaScript",
    author: "Yashwant Kanetkar",
    subject: "Back-end",
    publishDate: "2023-06-01",
  },
  {
    title: "Let us HTML",
    author: "Yashwant Kanetkar",
    subject: "Back-end",
    publishDate: "2023-07-01",
  },
  {
    title: "Let us CSS",
    author: "Yashwant Kanetkar",
    subject: "Subject 3",
    publishDate: "2023-08-01",
  },
  {
    title: "Yashwant Kanetkar",
    author: "Author 17",
    subject: "Subject 1",
    publishDate: "2023-09-01",
  },
  {
    title: "Let us NodeJs",
    author: "Saroj",
    subject: "Subject 2",
    publishDate: "2024-10-01",
  },
  {
    title: "Let us Front-end",
    author: "Saroj",
    subject: "Subject 3",
    publishDate: "2024-11-01",
  },
  {
    title: "Let-us Back-end",
    author: "Saroj",
    subject: "Subject 1",
    publishDate: "2024-12-01",
  },
  {
    title: "Let us Full-stack",
    author: "Saroj",
    subject: "Subject 2",
    publishDate: "2024-01-01",
  },
  {
    title: "Let us Kotlin",
    author: "Satish",
    subject: "Subject 3",
    publishDate: "2024-02-01",
  },
  {
    title: "Let us Swift",
    author: "Satish",
    subject: "Subject 1",
    publishDate: "2024-03-01",
  },
  {
    title: "Let us Bootstrap",
    author: "Sonpal",
    subject: "Subject 2",
    publishDate: "2024-04-01",
  },
  {
    title: "Master Datastructure",
    author: "Sonpal",
    subject: "Subject 3",
    publishDate: "2024-05-01",
  },
  {
    title: "Master c++",
    author: "Sonpal",
    subject: "Subject 1",
    publishDate: "2024-06-01",
  },
];

// Initialize booksData and filteredBooks with allBooks data
booksData = allBooks;
filteredBooks = allBooks;

// Function to display books based on the current page
function displayBooks() {
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = ""; // Clear previous content

  for (const book of booksToDisplay) {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `<p>Title: ${book.title}</p>
                                 <p>Author: ${book.author}</p>
                                 <p>Subject: ${book.subject}</p>
                                 <p>Publish Date: ${book.publishDate}</p>`;
    booksContainer.appendChild(bookElement);
  }
}

// Function to generate pagination buttons
function generatePaginationButtons() {
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginationContainer = document.getElementById("pagination");

  paginationContainer.innerHTML = ""; // Clear previous buttons

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", () => {
      currentPage = i;
      displayBooks();
    });
    paginationContainer.appendChild(button);
  }
}

// Function to apply filters based on user input
function applyFilters() {
  const titleInput = document.getElementById("title").value.toLowerCase();
  const authorInput = document.getElementById("author").value.toLowerCase();
  const subjectInput = document.getElementById("subject").value.toLowerCase();
  const publishDateInput = document
    .getElementById("publish-date")
    .value.toLowerCase();

  filteredBooks = booksData.filter((book) => {
    const { title, author, subject, publishDate } = book;
    return (
      title.toLowerCase().includes(titleInput) &&
      author.toLowerCase().includes(authorInput) &&
      subject.toLowerCase().includes(subjectInput) &&
      publishDate.toLowerCase().includes(publishDateInput)
    );
  });

  currentPage = 1; // Reset to the first page after applying filters
  displayBooks();
  generatePaginationButtons();
}

// Initial display of books and pagination buttons
displayBooks();
generatePaginationButtons();
