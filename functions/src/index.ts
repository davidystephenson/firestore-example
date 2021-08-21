import { https } from 'firebase-functions'
import addNumbers from './addNumbers'
import hello from './hello'
import addItem from './addItem'
import resetItems from './resetItems'
import removeItem from './removeItem'

exports.hello = https.onCall(hello)
exports.addNumbers = https.onCall(addNumbers)
// app.post('/add-item')
exports.addItem = https.onCall(addItem)
exports.resetItems = https.onCall(resetItems)
exports.removeItem = https.onCall(removeItem)