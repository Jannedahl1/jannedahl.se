// Importing Firebase from CDN (make sure you are using the correct version)
import firebase from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOq9E1qaHjQ-x2molz22sITMPdhR7dXks",
    authDomain: "jannedahl-55349.firebaseapp.com",
    projectId: "jannedahl-55349",
    storageBucket: "jannedahl-55349.firebasestorage.app",
    messagingSenderId: "711435268575",
    appId: "1:711435268575:web:fea31561a27057be2a946a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fetch and display data from Firestore
const fetchArticles = async () => {
    const articlesRef = db.collection("articles"); // "articles" collection
    const snapshot = await articlesRef.get();  // Get all documents in the collection
    const articleList = document.getElementById("article-list"); // Where to display the articles
    
    // Clear any existing content
    articleList.innerHTML = '';

    snapshot.forEach(doc => {
        const articleData = doc.data();
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        articleDiv.innerHTML = `
            <h3>${articleData.Title}</h3>
            <p>${articleData.Description}</p>
            <p><strong>Price:</strong> $${articleData.Price}</p>
            <p><strong>Contact:</strong> ${articleData.ContactMail} | ${articleData.ContactNo}</p>
        `;
        articleList.appendChild(articleDiv);
    });
};

// Add article to Firestore
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
        await db.collection("articles").add({
            Title: title,
            Description: description,
            Price: price,
            ContactMail: contactMail,
            ContactNo: contactNo,
            Date: date,
        });

        // Clear the form fields after submission
        document.getElementById("addArticleForm").reset();

        // Refresh the article list
        fetchArticles();
    } catch (error) {
        console.error("Error adding article: ", error);
    }
};

// Initialize article fetch on page load
window.onload = () => {
    fetchArticles();

    // Add event listener for form submission
    const form = document.getElementById("addArticleForm");
    form.addEventListener("submit", addArticle);
};
