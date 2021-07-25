document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inputBook");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addBook();
    })
})