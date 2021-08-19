import store from './store'

export default async function resetItems (): Promise<void> {
  const collection = store.collection('items')

  return await store.recursiveDelete(collection)
}
