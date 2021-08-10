import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState
} from 'react'

const config = {
  apiKey: 'AIzaSyD27I2iNBw5xRcxBtMlGYZm34xDUEyBui8',
  authDomain: 'firetest-a172c.firebaseapp.com',
  projectId: 'firetest-a172c',
  storageBucket: 'firetest-a172c.appspot.com',
  messagingSenderId: '116819113683',
  appId: '1:116819113683:web:f5c59f0d7dc4fac5b2c626',
  measurementId: 'G-Q3FVZ8K1NC'
}

function App (): JSX.Element {
  const cold = firebase.apps.length === 0
  const app = cold
    ? firebase.initializeApp(config)
    : firebase.app()

  const store = app.firestore()
  const collection = store.collection('items')
  const [items, loading, error] = useCollectionData(
    collection, { idField: 'id' }
  )

  const [x, setX] = useState('')
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [sum, setSum] = useState()
  const functions = app.functions()

  if (error != null) {
    console.log(error)

    return <main>Error!</main>
  }

  if (loading) {
    return <main>Loading...</main>
  }

  const paragraphs = items?.map(item => {
    const paragraph = (
      <p key={item.id}>
        {item.x}
      </p>
    )

    return paragraph
  })

  async function hello (): Promise<void> {
    console.log('hello')

    const hello = functions
      .httpsCallable('hello')
    await hello()
  }

  function changeX (
    event: ChangeEvent<HTMLInputElement>
  ): void {
    setX(event.target.value)
  }

  async function addItem (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    const addItem = functions
      .httpsCallable('addItem')
    await addItem({ x })
  }

  function changeNumber (
    value: string,
    setter: Dispatch<SetStateAction<number>>
  ): void {
    const newValue = parseInt(value)
    setter(newValue)
  }

  function changeFirst (
    event: ChangeEvent<HTMLInputElement>
  ): void {
    changeNumber(
      event.target.value,
      setFirst
    )
  }

  function changeSecond (
    event: ChangeEvent<HTMLInputElement>
  ): void {
    changeNumber(
      event.target.value,
      setSecond
    )
  }

  async function addNumbers (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    const addNumbers = functions
      .httpsCallable('addNumbers')
    const response = await addNumbers(
      { first, second }
    )
    setSum(response.data)
  }

  return (
    <main>
      <button onClick={hello}>Hello</button>

      <h1>Xs</h1>

      {paragraphs}

      <form onSubmit={addItem}>
        <input value={x} onChange={changeX} placeholder='Add item' />
      </form>

      <h1>Sum</h1>

      <form onSubmit={addNumbers}>
        <input
          value={first}
          type='number'
          placeholder='first number'
          onChange={changeFirst}
        />
        <input
          value={second}
          type='number'
          placeholder='first number'
          onChange={changeSecond}
        />
        <button>Add</button>
      </form>
      <p>{sum}</p>
    </main>
  )
}

export default App
