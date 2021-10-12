
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFTNU2uPsEJvyyev2O_-4_vzcPT5G8M3A",
  authDomain: "ycohui-com.firebaseapp.com",
  databaseURL: "https://ycohui-com-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ycohui-com",
  storageBucket: "ycohui-com.appspot.com",
  messagingSenderId: "259509744566",
  appId: "1:259509744566:web:43e52f01575b436aa74717",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

console.log(database.name);

function writeData() {
    firebase.database().ref("email").set({
        email: document.getElementById("mail").value
    });
}