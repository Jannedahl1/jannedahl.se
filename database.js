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
const db = firebase.firestore(app);

// Fetch listings from Firestore and display them
function fetchListings() {
    const listingsContainer = document.getElementById('listing-container');

    // Get data from Firestore
    db.collection('listings').orderBy('timestamp', 'desc').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const post = doc.data();
                
                const listingDiv = document.createElement('div');
                listingDiv.classList.add('listing');
                
                // Construct the post content
                listingDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p><strong>Description:</strong> ${post.description}</p>
                    <p><strong>Price:</strong> $${post.price}</p>
                    <p><strong>Location:</strong> ${post.location}</p>
                    <p><strong>Contact:</strong> ${post.contactInfo}</p>
                    <p><strong>Date Posted:</strong> ${post.timestamp.toDate().toLocaleString()}</p>
                `;
                
                listingsContainer.appendChild(listingDiv);
            });
        })
        .catch((error) => {
            console.error("Error fetching listings: ", error);
        });
}

// Call the fetchListings function to display posts when the page loads
window.onload = fetchListings;
