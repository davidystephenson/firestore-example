import { https } from 'firebase-functions'
import addNumbers from './addNumbers'
import hello from './hello'
import addItem from './addItem'
import resetItems from './resetItems'

exports.hello = https.onCall(hello)
exports.addNumbers = https.onCall(addNumbers)
exports.addItem = https.onCall(addItem)
exports.resetItems = https.onCall(resetItems)
