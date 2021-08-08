import firebase from 'firebase/app'
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

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
  const [items, loading, error] = useCollectionData(collection, { idField: 'id' })

  if (error != null) {
    console.log(error)

    return <main>Error!</main>
  }

  if (loading) {
    return <main>Loading...</main>
  }

  console.log('items test:', items)

  const paragraphs = items?.map(item => {
    const paragraph = <p key={item.id}>{item.x}</p>

    return paragraph
  })

  return (
    <main>
      <h1>Xs</h1>

      {paragraphs}
    </main>
  )
}

export default App
