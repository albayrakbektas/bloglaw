import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//
// import * as VueGoogleMaps from 'vue2-google-maps'
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyB1WnckibJZPODbiBwJHjZI_4zPy_beK_8',
//     libraries: 'places' // if you need other libraries, add them here
//   }
// })

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_FIREBASE_APP_ID,
//   measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
//   databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
// };
//
// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAnalytics = getAnalytics(firebaseApp);
// const firebaseDatabase = getDatabase(firebaseApp);
// const firebaseStorage = getStorage(firebaseApp);
//
// Vue.prototype.$firebaseAnalytics = firebaseAnalytics;
// Vue.prototype.$firebaseDatabase = firebaseDatabase;
// Vue.prototype.$firebaseStorage = firebaseStorage;

require('./bootstrap')

// window.objectToFormData = require('object-to-formdata').objectToFormData


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
