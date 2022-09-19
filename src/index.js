/* in Firebase 8
// 'firebase/app' is the core part of firebase library
// firebase object imported contains methods to connect to firebase and initialize different services  
import firebase from 'firebase/app'
*/

// in Firebase 9, just import the single function from the library

import {initializeApp} from 'firebase/app'

// import 
// 1) getFirestore: the function to init firestore service on the front-end, so we can connect to the firestore
// 2) collection: the function to get a reference to a specific collection
// 3) getDocs: get the collection data 
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCabbf6sg61iGMjXUs6hAI6N1QHUrVDAHU",
    // apiKey: process.env.API_KEY,
    authDomain: "fir-wenqi.firebaseapp.com",
    projectId: "fir-wenqi",
    storageBucket: "fir-wenqi.appspot.com",
    messagingSenderId: "306498170206",
    appId: "1:306498170206:web:e0371fcf6b3512620eb3cf",
    measurementId: "G-FTJG690WET"
  };

  /* in Firebase 8, to initialize the app or the connection to the firebase backend
  // firebase.initializeApp(firebaseConfig)
  */

  // in Firebase 9, just import the sigle functions and call it directly 
  // the following method is able to connect the node.js project to the firebase backend
  
  // Steps: 
  // 1) init firebase app
  initializeApp(firebaseConfig)

  // 2) init services
  const db = getFirestore()     // database is constant

  /* older version
  const db = firebase.firestore()
  db.collection('books')  
  */

  // 3) collection ref :  a reference to a specific collection in our database
  // from firestore to get the specific collection of 'books'
  const colRef = collection(db,'books')

  // 4) get collection data
  getDocs(colRef)
    .then((snapshot) => {
        // console.log(snapshot.docs)

        // steps:
        // 1) for each of the documents on the snapshot
        // 2) adding a new object to the books array
        // 3) for each object we get the data and the id of the document

        let books = []
        // get each doc from firebase documents and put to the book array
        snapshot.docs.forEach((doc) => {
            // dpc.data returns different data properties, such as the title and the author
            // ... is used to sepread them into our new object, to take above two propertities and outputs them into new boject 
            books.push({ ...doc.data(), id: doc.id })   
        })

        // log out the books
        console.log(books)
    })

    .catch(err => {
        console.log(err.message)
    })