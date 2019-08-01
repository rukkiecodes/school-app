import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAl7ISeWRV14JeKk_Cw1hy6xkKqeAHzDHo",
    authDomain: "vue-school-82789.firebaseapp.com",
    databaseURL: "https://vue-school-82789.firebaseio.com",
    projectId: "vue-school-82789",
    storageBucket: "",
    messagingSenderId: "812321016154",
    appId: "1:812321016154:web:22caefd5f9b8f1b3"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);