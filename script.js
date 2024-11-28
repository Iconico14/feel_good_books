document.getElementById("submit").addEventListener("click", function () {
    const feeling = document.getElementById("feeling").value;
    const recommendations = document.getElementById("recommendations");
    const bookList = document.getElementById("book-list");

    let books = [];
    bookList.innerHTML = "";

    // Recommendations based on mood
    switch (feeling) {
        case "happy":
            books = [
                { title: "The Happiness Project", author: "Gretchen Rubin", img: "https://via.placeholder.com/100" },
                { title: "Big Magic", author: "Elizabeth Gilbert", img: "https://via.placeholder.com/100" }
            ];
            break;
        case "sad":
            books = [
                { title: "Reasons to Stay Alive", author: "Matt Haig", img: "https://via.placeholder.com/100" },
                { title: "Option B", author: "Sheryl Sandberg", img: "https://via.placeholder.com/100" }
            ];
            break;
        case "stressed":
            books = [
                { title: "The Power of Now", author: "Eckhart Tolle", img: "https://via.placeholder.com/100" },
                { title: "Atomic Habits", author: "James Clear", img: "https://via.placeholder.com/100" }
            ];
            break;
        case "motivated":
            books = [
                { title: "Can't Hurt Me", author: "David Goggins", img: "https://via.placeholder.com/100" },
                { title: "Grit", author: "Angela Duckworth", img: "https://via.placeholder.com/100" }
            ];
            break;
        default:
            books = [];
    }

    // Populate recommendations
    if (books.length > 0) {
        books.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.className = "book-item";
            bookItem.innerHTML = `
                <img src="${book.img}" alt="${book.title}">
                <div>
                    <h3>${book.title}</h3>
                    <p><em>${book.author}</em></p>
                </div>
            `;
            bookList.appendChild(bookItem);
        });
        recommendations.classList.remove("hidden");
    } else {
        recommendations.innerHTML = "<p>No recommendations available.</p>";
    }
});
