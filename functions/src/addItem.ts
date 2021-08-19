import { firestore } from 'firebase-admin'
import store from './store'

export default async function addItem (
  { x }: { x: string }
): Promise<firestore.WriteResult> {
  const collection = store.collection('items')
  const document = collection.doc()

  return await document.set({ x })
}
