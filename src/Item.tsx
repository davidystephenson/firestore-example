import useFunction from './use/function'

import { Item, Functions } from './types'

export default function ItemView (
  { item, functions }: { item: Item, functions: Functions }
) {
  const { status, run } = useFunction({
    name: 'removeItem',
    functions: functions,
    mutation: { id: item.id },
    label: 'removing...'
  })

  return (
    <p key={item.id}>
      {item.x}
      {' '}
      <button onClick={run}>Remove</button>
      {' '}
      {status}
    </p>
  )
}