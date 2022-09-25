import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import firebase from "firebase/compat/app";
Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPWfQ3TgRGiasv3pJJGUfdQoFqaLq61RI",
  authDomain: "spring-harbor-e9db2.firebaseapp.com",
  projectId: "spring-harbor-e9db2",
  storageBucket: "spring-harbor-e9db2.appspot.com",
  messagingSenderId: "792875601884",
  appId: "1:792875601884:web:7e6726ac911c403a660919",
  measurementId: "G-16NTFVW11F",
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
