import admin from 'firebase-admin'
import { config } from 'firebase-functions'

const { firebase } = config()
admin.initializeApp(firebase)
const store = admin.firestore()

export default function addItem (
  { x }: { x: string }
): void {
  const collection = store.collection('items')
  const document = collection.doc()

  document.set({ x })
}
