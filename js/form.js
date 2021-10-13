
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBEI9Gsov6qvSR09LGpouRaazCWHoWdRRQ",
  authDomain: "site-autha.firebaseapp.com",
  databaseURL: "https://site-autha-default-rtdb.firebaseio.com",
  projectId: "site-autha",
  storageBucket: "site-autha.appspot.com",
  messagingSenderId: "226556419087",
  appId: "1:226556419087:web:fb3a0fbf5fa1121355977a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
//debugger;


// CSS Form Homework 
    var uname = window.document.getElementById('user').value;
    var name = document.getElementById('user').value;
    var email = window.document.getElementById('email').value;
    var prefix = window.document.getElementById('gender').value;
    var tz = window.document.getElementById('timezone');
        let tzAttr = tz.options[tz.selectedIndex].getAttribute('timeZoneId');
    var comment = window.document.getElementById('info').value;

window.mailOut = mailOut;
function mailOut() {
    
    uname = window.document.getElementById('user').value;
    name = document.getElementById('user').value;
    email = window.document.getElementById('email').value;
    prefix = window.document.getElementById('gender').value;
    tz = window.document.getElementById('timezone');
        let tzAttr = tz.options[tz.selectedIndex].getAttribute('timeZoneId');
    comment = window.document.getElementById('info').value;

    console.log(uname + email + '!');
    if(uname != "") {
        set(ref(db, 'user/'+ uname), {
            gender: prefix,
            username: uname,
            email: email,
            timezone: tzAttr,
            rmks: comment
        })
        console.log('Done!');
    } else {
        console.log('Null!');
    }
}
