// ✅ Use Firebase Config directly (we already restricted it to your domain)
const firebaseConfig = {
    apiKey: "AIzaSyCOq9E1qaHjQ-x2molz22sITMPdhR7dXks",
    authDomain: "jannedahl-55349.firebaseapp.com",
    projectId: "jannedahl-55349",
    storageBucket: "jannedahl-55349.appspot.com",
    messagingSenderId: "711435268575",
    appId: "1:711435268575:web:fea31561a27057be2a946a"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Example: Fetch Data from Firestore
db.collection("articles").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});
