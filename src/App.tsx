import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'

import Header from './Header'
import Hello from './Hello'
import Items from './Items'
import Sum from './Sum'

const config = {
  apiKey: 'AIzaSyD27I2iNBw5xRcxBtMlGYZm34xDUEyBui8',
  authDomain: 'firetest-a172c.firebaseapp.com',
  projectId: 'firetest-a172c',
  storageBucket: 'firetest-a172c.appspot.com',
  messagingSenderId: '116819113683',
  appId: '1:116819113683:web:f5c59f0d7dc4fac5b2c626',
  measurementId: 'G-Q3FVZ8K1NC'
}

// Login to Firebase
const cold = firebase.apps.length === 0
const app = cold
  ? firebase.initializeApp(config)
  : firebase.app()

function App (): JSX.Element {
  const store = app.firestore()
  const functions = app.functions()

  return (
    <main>
      <Header />

      <Hello functions={functions} />

      <Items functions={functions} store={store} />
      <Items functions={functions} store={store} />

      <Sum functions={functions} />
    </main>
  )
}

export default App
