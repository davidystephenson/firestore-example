import firebase from 'firebase/app'
import {
  ChangeEvent, Dispatch, FormEvent, SetStateAction, 
} from 'react'

export type Functions = firebase.functions.Functions
export type Firestore = firebase.firestore.Firestore

export type NumberSetter = Dispatch<SetStateAction<number>>
export type StringSetter = Dispatch<SetStateAction<string>>
export type Change = ChangeEvent<HTMLInputElement>
export type Submission = FormEvent<HTMLFormElement>

export interface Item {
  x: string
  id: string
}