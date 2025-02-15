// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch articles from Firestore
const fetchArticles = async () => {
    const articlesRef = collection(db, "articles");
    const snapshot = await getDocs(articlesRef);
    const articleList = document.getElementById("article-list");

    // Clear the current article list
    articleList.innerHTML = '';

    snapshot.forEach(doc => {
        const articleData = doc.data();
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        articleDiv.innerHTML = `
            <h3>${articleData.Title}</h3>
            <p>${articleData.Description}</p>
            <p><strong>Price:</strong> ${articleData.Price}kr</p>
            <p><strong>Contact:</strong> ${articleData.ContactMail} | 0${articleData.ContactNo}</p>
        `;
        articleList.appendChild(articleDiv);
    });
};

// Add a new article to Firestore
const addArticle = async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = parseInt(document.getElementById("price").value, 10);
    const contactMail = document.getElementById("contactMail").value;
    const contactNo = parseInt(document.getElementById("contactNo").value, 10);
    const date = new Date();

    try {
        // Add article to Firestore
        await addDoc(collection(db, "articles"), {
            Title: title,
            Description: description,
            Price: price,
            ContactMail: contactMail,
            ContactNo: contactNo,
            Date: date,
        });

        // Reset the form after submission
        document.getElementById("addArticleForm").reset();

        // Reload the articles to show the new one
        fetchArticles();
    } catch (error) {
        console.error("Error adding article: ", error);
    }
};

// Initialize the page by loading articles and setting up the form submission
window.onload = () => {
    fetchArticles();

    const form = document.getElementById("addArticleForm");
    if (form) {
        form.addEventListener("submit", addArticle);
    }
};
