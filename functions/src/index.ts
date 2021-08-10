import { https } from 'firebase-functions'
import addNumbers from './addNumbers'
import hello from './hello'
import addItem from './addItem'

exports.hello = https.onCall(hello)
exports.addNumbers = https.onCall(addNumbers)
exports.addItem = https.onCall(addItem)
