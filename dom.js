const COMPLETE_LIST = "completeBookshelfList";
const UNCOMPLETE_LIST = "incompleteBookshelfList";
const BOOK_ITEMID = "bookId";

function logging(title, author, year, isCompleted=false) {
    console.log("title: ", title);
    console.log("author: ", author);
    console.log("year: ", year);
    console.log("completed: ", isCompleted);
}

function addBook() {
    const title = document.getElementById("inputBookTitle").value;
    const author = document.getElementById("inputBookAuthor").value;
    const year = document.getElementById("inputBookYear").value;
    const completed = document.getElementById("inputBookIsComplete").checked;

    const newbook = createBook(title, author, year, completed);
    logging(title, author, year, completed)

    let bookshelfList;

    if (!completed) {
        bookshelfList = document.getElementById("incompleteBookshelfList");
    } else {
        bookshelfList = document.getElementById("completeBookshelfList")
    }

    const bookObj = comboseBookObj(title, author, year, completed);
    newbook[BOOK_ITEMID] = bookObj.id;
    books.push(bookObj);

    bookshelfList.append(newbook);
    updateDataToStorage();
}

function createBook(title, author, year, isCompleted) {
    const titleElement = document.createElement("h3");
    titleElement.innerText = title;

    const authorElement = document.createElement("p");
    authorElement.innerText = author;

    const yearElement = document.createElement("p");
    yearElement.innerText = year;

    const action = document.createElement("div");
    action.classList.add("action")

    if (isCompleted) {
        action.append(createUnCompleteButton());
    } else {
        action.append(createCompleteButton());
    }
    action.append(createRedButton());

    const bookItem = document.createElement("article");
    bookItem.classList.add("book_item");
    bookItem.append(titleElement, authorElement, yearElement, action);

    return bookItem;
}

function createButton(buttonClass, buttonText, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonClass)
    button.innerText = buttonText;
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}

function deleteBook(bookElement) {
    const bookidx = findBookIdx(bookElement[BOOK_ITEMID]);
    books.splice(bookidx, 1);

    bookElement.remove();
    updateDataToStorage();
}

function createRedButton() {
    return createButton("red", "Hapus buku", event => {
        deleteBook(event.target.parentElement.parentElement);
    });
}

function createCompleteButton() {
    return createButton("green", "Selesai dibaca", event => {
        addToCompleteList(event.target.parentElement.parentElement);
    });
}

function createUnCompleteButton() {
    return createButton("green", "Belum selesai di Baca", event => {
        addToUnCompleteList(event.target.parentElement.parentElement);
    });
}

function addToCompleteList(bookElement) {
    const bookTitle = bookElement.querySelector(".book_item > h3").innerText;
    const bookAuthor = bookElement.querySelectorAll(".book_item > p")[0].innerText;
    const bookYear = bookElement.querySelectorAll(".book_item > p")[1].innerText;

    const book = createBook(bookTitle, bookAuthor, bookYear, true);
    const bookObj = findBook(bookElement[BOOK_ITEMID]);
    book[BOOK_ITEMID] = bookObj.id;
    bookObj.isCompleted = true;

    document.getElementById(COMPLETE_LIST)
        .append(book);

    bookElement.remove();
    updateDataToStorage();
}

function addToUnCompleteList(bookElement) {
    const bookTitle = bookElement.querySelector(".book_item > h3").innerText;
    const bookAuthor = bookElement.querySelectorAll(".book_item > p")[0].innerText;
    const bookYear = bookElement.querySelectorAll(".book_item > p")[1].innerText;

    const book = createBook(bookTitle, bookAuthor, bookYear, false);
    const bookObj = findBook(bookElement[BOOK_ITEMID]);
    book[BOOK_ITEMID] = bookObj.id;
    bookObj.isCompleted = false;

    document.getElementById(UNCOMPLETE_LIST)
        .append(book);

    bookElement.remove();
    updateDataToStorage();
}