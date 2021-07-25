function logging(title, author, year) {
    console.log("title: ", title);
    console.log("author: ", author);
    console.log("year: ", year);
}

function addBook() {
    const title = document.getElementById("inputBookTitle").value;
    const author = document.getElementById("inputBookAuthor").value;
    const year = document.getElementById("inputBookYear").value;

    const newbook = createBook(title, author, year, false);
    logging(title, author, year)

    document.getElementById("incompleteBookshelfList").append(newbook);
}

function createBook(title, author, year, isCompleted) {
    const titleElement = document.createElement("h3");
    titleElement.innerText = title;

    const authorElement = document.createElement("p");
    authorElement.innerText = author;

    const yearElement = document.createElement("p");
    yearElement.innerText = year;

    const bookItem = document.createElement("article");
    bookItem.append(titleElement, authorElement, yearElement);

    if (isCompleted) {

    } else {

    }

    return bookItem;
}