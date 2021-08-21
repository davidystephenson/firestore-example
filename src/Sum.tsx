import { useState } from 'react'

import useFunction from './use/function'

import {
  Change, Functions, NumberSetter, Submission
} from './types'

export default function Sum (
  { functions }: { functions: Functions }
) {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [sum, setSum] = useState()
  const { status, run } = useFunction({
    name: 'addNumbers',
    functions,
    mutation: { first, second },
    label: 'Adding numbers...'
  })

  function changeNumber (
    value: string,
    setter: NumberSetter
  ): void {
    const newValue = parseInt(value)
    setter(newValue)
  }

  function changeFirst (event: Change): void {
    changeNumber(
      event.target.value,
      setFirst
    )
  }

  function changeSecond (event: Change): void {
    changeNumber(
      event.target.value,
      setSecond
    )
  }

  async function add (event: Submission): Promise<void> {
    event.preventDefault()

    const sum = await run()
    setSum(sum)
  }

  const answer = sum != null ? `: ${sum}` : sum
  // IMPOSSIBLE? const answer = sum !?? `: ${sum}`

  return <>
    <h1>Sum{answer}</h1>

    <p>{status}</p>

    <form onSubmit={add}>
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
  </>
}