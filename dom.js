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

    bookshelfList.append(newbook);
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
        action.append(createButton("green", "Belum selesai di Baca"));
    } else {
        action.append(createButton("green", "Selesai dibaca"));
    }

    const bookItem = document.createElement("article");
    bookItem.classList.add("book_item");
    bookItem.append(titleElement, authorElement, yearElement, action);

    return bookItem;
}

function createButton(buttonClass, buttonText) {
    const button = document.createElement("button");
    button.classList.add(buttonClass)
    button.innerText = buttonText;
    return button;
}

