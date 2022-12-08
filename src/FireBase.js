const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBJ6gNw2YNVXDzB6RwYFmz6Zc9BS_dunAM",
    authDomain: "whatsapp-clone-bd456.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-bd456.firebaseio.com",
    projectId: "whatsapp-clone-bd456",
    storageBucket: "whatsapp-clone-bd456.appspot.com",
    messagingSenderId: "622977241527",
    appId: "1:622977241527:web:0e813a225cc15820d05832",
    measurementId: "G-N5KGYBT3GV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const  provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;