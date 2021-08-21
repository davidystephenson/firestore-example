import store from './store'
import { firestore } from 'firebase-admin'

export default async function removeItem (
  { id }: { id: string }
): Promise<firestore.WriteResult> {
  const collection = store.collection('items')
  const document = collection.doc(id)

  return await document.delete()
}