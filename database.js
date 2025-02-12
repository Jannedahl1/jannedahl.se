// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOq9E1qaHjQ-x2molz22sITMPdhR7dXks",
    authDomain: "jannedahl-55349.firebaseapp.com",
    projectId: "jannedahl-55349",
    storageBucket: "jannedahl-55349.appspot.com",
    messagingSenderId: "711435268575",
    appId: "1:711435268575:web:fea31561a27057be2a946a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Example: Fetch data from Firestore
db.collection("articles").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}).catch((error) => {
    console.error("Error fetching articles: ", error);
});

// Example: Add a new article to Firestore
function addArticle() {
    db.collection("articles").add({
        title: "New Article",
        description: "This is a new article description.",
        price: 100,
        contactMail: "example@example.com",
        contactNo: "123456789"
    }).then(() => {
        console.log("Article added successfully!");
    }).catch((error) => {
        console.error("Error adding article: ", error);
    });
}

// Call addArticle to add a new entry
// addArticle();  // Uncomment to run this function
