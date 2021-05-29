import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAWSNMtPriSKr7GU-o2AxKRFxhNa7NERME",
    authDomain: "clone-7edfa.firebaseapp.com",
    projectId: "clone-7edfa",
    storageBucket: "clone-7edfa.appspot.com",
    messagingSenderId: "561481710599",
    appId: "1:561481710599:web:d0caaff72d0b36d4d87ea2",
    measurementId: "G-Y27PPG5MX6"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();

  const auth = firebase.auth();

  export {db,auth};