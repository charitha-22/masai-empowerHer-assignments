const url = "https://bookmanagementapp-47246-default-rtdb.asia-southeast1.firebasedatabase.app/";

async function addBook(){
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const price = document.getElementById('price').value.trim();
    const img = document.getElementById('img').value.trim();

    if(!title || !author || !price || !img){
        alert("Please enter valid data");
        return;
    }

    const bookData = {
        title,
        author,
        price,
        img
    }

    await fetch(`${url}books.json`,{
        method : "POST",
        body : JSON.stringify(bookData)
    });

    alert("Book Added!");

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('price').value = "";
    document.getElementById('img').value = "";

    getBooks();

}

async function getBooks(books) {
    const result = await fetch(`${url}books.json`);
    const data = await result.json();

    const booksArray = data ? Object.entries(data).map(([id, books])=>({
        id,
        ...books
    })) : [];

    renderBooks(booksArray);
}

function renderBooks(books){
    const mainDiv = document.getElementById("bookList");
    mainDiv.innerHTML = "";

    books.forEach((book) => {
        let c = document.createElement('div');
        c.className = "card";

        c.innerHTML = `
        <img src="${book.img}">
        <h3>${book.title}</h3>
        <p> Author: ${book.author} </p>
        <p> Price: ${book.price} </p>
        <button class="btnEdit" onclick="updateBook('${book.id}', '${book.title}', '${book.author}', '${book.price}', '${book.img}')"> Edit </button>
        <button class="btnDel" onclick="deleteBook('${book.id}')"> Delete </button> 
        ` ;

        mainDiv.appendChild(c);
    });
}

async function updateBook(id, oTitle, oAuthor, oPrice, oImg) {
    const title = prompt("Enter new title", oTitle);
    const author = prompt("Enter new title", oAuthor);
    const price = prompt("Enter new title", oPrice);
    const img = prompt("Enter new title", oImg);

    if(!title || !author || !price || !img) return;

    const updatedBook = {
        title,
        author,
        price,
        img
    }

    await fetch(`${url}books/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(updatedBook)
    });

    alert("Book Updated!");
    getBooks();
}

async function deleteBook(id) {
    await fetch(`${url}books/${id}.json`, {
        method: "DELETE"
    });

    alert("Deleted");
    getBooks();
    
}

getBooks();