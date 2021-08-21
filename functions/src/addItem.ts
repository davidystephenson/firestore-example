import { firestore } from 'firebase-admin'
import store, { serverTimestamp } from './store'

// app.get('/add-item/')
export default async function addItem (
  { x }: { x: string } // req.body === { x: string }
): Promise<firestore.WriteResult> {
  const collection = store.collection('items')
  const document = collection.doc()

  const createdAt = serverTimestamp()
  const data = { x, createdAt }
  
  return await document.set(data)
}
