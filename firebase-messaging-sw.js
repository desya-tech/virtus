importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
 apiKey: "AIzaSyBQ666Cb1GYnpWsfNyTJ8q6ZKkpzxPXCFA",
 authDomain: "virtus-platform-notif.firebaseapp.com",
 projectId: "virtus-platform-notif",
 storageBucket: "virtus-platform-notif.appspot.com",
 messagingSenderId: "275687830048",
 appId: "1:275687830048:web:8eb1e2cd03ecdc1d044245",
 measurementId: "G-WBRTH7MNL6"
});
const messaging = firebase.messaging();