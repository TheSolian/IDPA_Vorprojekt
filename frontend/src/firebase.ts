import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAKHIK3NVTGHWLcGvK39EN7Zw1bpyo0ySA',
  authDomain: 'idpa-vorprojekt.firebaseapp.com',
  projectId: 'idpa-vorprojekt',
  storageBucket: 'idpa-vorprojekt.appspot.com',
  messagingSenderId: '1025695268387',
  appId: '1:1025695268387:web:64f3db207280c88db53b96',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
