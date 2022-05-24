importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
firebase.initializeApp({
 apiKey: "AIzaSyBQ666Cb1GYnpWsfNyTJ8q6ZKkpzxPXCFA",
 authDomain: "virtus-platform-notif.firebaseapp.com",
 projectId: "virtus-platform-notif",
 storageBucket: "virtus-platform-notif.appspot.com",
 messagingSenderId: "275687830048",
 appId: "1:275687830048:web:8eb1e2cd03ecdc1d044245",
 measurementId: "G-WBRTH7MNL6"
});
console.log("masukkkkkkkkk")
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});