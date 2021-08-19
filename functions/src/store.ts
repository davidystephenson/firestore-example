import admin from 'firebase-admin'
import { config } from 'firebase-functions'

const { firebase } = config()
admin.initializeApp(firebase)
const store = admin.firestore()

export default store
