import { useState } from 'react'
import firebase from 'firebase/app'
import useFunction from './use/function'

export default function Hello (
  { functions }: { functions: firebase.functions.Functions }
) {
  const [message, setMessage] = useState('Waiting for hello.')
  const { status, run } = useFunction({
    name: 'hello', functions, label: 'Saying hello...'
  })

  async function hello (): Promise<void> {
    const message = await run()

    setMessage(message)
  }

  return <>
    <button onClick={hello}>Hello {status}</button>
    <p>{message}</p>
  </>
}