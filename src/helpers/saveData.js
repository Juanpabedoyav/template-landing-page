import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export const saveData = async (name, email) => {
  try {
    const docRef = await addDoc(collection(db, 'emails'), name, email)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
