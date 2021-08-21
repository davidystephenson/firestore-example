import React from 'react'
import { Functions } from '../types'

const { useState } = React

export default function useFunction (
  { name, mutation, label, functions }:
  {
    name: string,
    mutation?: any,
    label?: string,
    functions: Functions
  }
) {
  const first = name[0]
  const lower = name
    .replace(first, first.toLowerCase())

  label = label || `${name}ing...`

  const [status, setStatus] = useState<string>()
  const [
    loading,
    setLoading
  ] = useState(false)

  async function run () {
    setStatus(label)
    setLoading(true)

    const call = functions.httpsCallable(lower)

    try {
      const { data } = await call(mutation)

      setStatus('')
      setLoading(false)

      return data
    } catch (error) {
      setStatus(error.message)
      setLoading(false)

      console.error(error)
    }
  }

  return {
    loading,
    run,
    setStatus,
    status
  }
}