import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZEH1WeE5bajSfbRnjFLB5soqx8tb-f_8",
  authDomain: "fireblog-70c47.firebaseapp.com",
  projectId: "fireblog-70c47",
  storageBucket: "fireblog-70c47.appspot.com",
  messagingSenderId: "199943793641",
  appId: "1:199943793641:web:abb0d8290688551024f978",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
