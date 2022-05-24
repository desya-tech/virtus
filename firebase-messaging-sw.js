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

getToken(messaging, {
  vapidKey:
    "BOB_q5FWongjJ8hSskOsmhlrSRwABrfqv5IC8ZZH3HMoa1xv6yGZhLJtf_J2VlLmaI9O41txvGJs8F-IuMNZmOo",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("Firebase Token", currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});
