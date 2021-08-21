import { firestore, initializeApp } from 'firebase-admin'
import { config } from 'firebase-functions'

export const { serverTimestamp } = firestore.FieldValue

const { firebase } = config()
initializeApp(firebase)
const store = firestore()

export default store
