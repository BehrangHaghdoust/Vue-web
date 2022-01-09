import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCh6wzfjT8isX_UNLmEgro-9LgFAoguiSQ",
  authDomain: "fireblogsyt-3de7d.firebaseapp.com",
  projectId: "fireblogsyt-3de7d",
  storageBucket: "fireblogsyt-3de7d.appspot.com",
  messagingSenderId: "93171106912",
  appId: "1:93171106912:web:6205b6cb85faff455f2f05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamps = firebase.firestore.FieldValue.serverTimestamp;

export {timestamps} ;
export default firebaseApp.firestore(); 