// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHIEwVLDYb1cWXjO1qpVmLTd_xR4Wbu0Y',
  authDomain: 'ladingpage-fa447.firebaseapp.com',
  projectId: 'ladingpage-fa447',
  storageBucket: 'ladingpage-fa447.appspot.com',
  messagingSenderId: '824555661272',
  appId: '1:824555661272:web:d62d2d934f25fa1be1b4ad',
  measurementId: 'G-49WJRNVZ4X'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
