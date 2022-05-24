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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

    messaging.setBackgroundMessageHandler(function(payload) {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      // Customize notification here
      const notificationTitle = 'Background Message Title';
      const notificationOptions = {
        body: 'Background Message body.',
        icon: './firebase-logo.png'
      };
    
      return self.registration.showNotification(notificationTitle,
        notificationOptions);
    });