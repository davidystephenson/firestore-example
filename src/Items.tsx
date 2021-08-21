import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import useFunction from './use/function'

import {
  Change, Firestore, Functions, Item, Submission
} from './types'
import ItemView from './Item'

export default function Items (
  { functions, store }:
  { functions: Functions, store: Firestore }
) {
  const collection = store.collection('items')
  const limited = collection.limit(3)   
  const ordered = limited.orderBy('createdAt', 'desc')
  const [items, loading, error] = useCollectionData<Item>(
    ordered, { idField: 'id' }
  )

  const [x, setX] = useState('')
  const { run, status } = useFunction({
    name: 'addItem',
    functions,
    mutation: { x },
    label: 'adding...'
  })
  const { status: resetStatus, run: reset } = useFunction({
    name: 'resetItems',
    label: 'resetting...',
    functions
  })

  if (error != null) {
    console.log('error test:', error)

    return <main>Error!</main>
  }

  if (loading) {
    return <main>Loading...</main>
  }


  const paragraphs = items?.map((item: Item) => (
    <ItemView key={item.id} item={item} functions={functions} />
  ))

  function changeX (event: Change): void {
    setX(event.target.value)
  }

  async function addItem (event: Submission): Promise<void> {
    event.preventDefault()
    
    await run()
  }

  return <>
    <h1>
      Items
      {' '}
      <button onClick={reset}>Reset</button>
      {' '}
      {resetStatus}
    </h1>

    <form onSubmit={addItem}>
      <input
        value={x}
        onChange={changeX}
        placeholder='Add item'
      />
    </form>

    {status}

    {paragraphs}
  </>
}