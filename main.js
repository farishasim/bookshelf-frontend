document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inputBook");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addBook();
    })

    if(isStorageExist()) {
        loadDataFromStorage();
    }
})

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
});
document.addEventListener("ondataloaded", () => {
    refreshDataFromBooks();
});