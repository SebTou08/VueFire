import 'firebase/firestore'

import firebase from "firebase/compat";



const firebaseConfig = {
    apiKey: "AIzaSyCSCNNUN_xvkkrk5DTowXXVwEYqQdA_QOA",
    authDomain: "firstvueapp-96667.firebaseapp.com",
    databaseURL: "https://firstvueapp-96667-default-rtdb.firebaseio.com",
    projectId: "firstvueapp-96667",
    storageBucket: "firstvueapp-96667.appspot.com",
    messagingSenderId: "166560956564",
    appId: "1:166560956564:web:68847712a2ac150afb7481"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const db = firebaseApp.firestore()

