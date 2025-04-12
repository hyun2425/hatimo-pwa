// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: "AIzaSyAF6Cr7C67Es81G5kifmO4QELdTla1P-kk",
  projectId: "hatimo-e23ef",
  messagingSenderId: "827641897840",
  appId: "1:827641897840:web:bfa7f7a58e9dc58b2425b5"
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Background 메시지 수신:', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/cookie_192.png'
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})