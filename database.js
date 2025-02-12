// Firebase configuration (Replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Get the form element and add a submit event listener
const form = document.getElementById('database-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Add data to Firestore
    db.collection('listings').add({
        name: name,
        description: description,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert('Post added successfully!');
        form.reset();  // Reset form after submission
    })
    .catch((error) => {
        alert('Error adding post: ' + error);
    });
});
