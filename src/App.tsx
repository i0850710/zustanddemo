import { useCounterStore } from './store/counter'
import shallow from 'zustand/shallow'
import { useUserStore } from './store/user'
import { useEffect, FC } from 'react'

//https://api.publicapis.org/entries
//https://api.publicapis.org/random

const Count: FC = () => {
  console.log('Rendered Count')
  const count = useCounterStore(state => state.count)

  return <>
    {count}
  </>
}

const Count2: FC = () => {
  console.log('Rendered Count2')
  const count2 = useCounterStore(state => state.count2)

  return <>{count2.value}</>
}

const Counter = () => {
  console.log('Rendered Counter')
  // const [addReturn, add] = useCounterStore(state => [state.addReturn, state.add], shallow)
  const addReturn = useCounterStore(state => state.addReturn)
  const add = useCounterStore(state => state.add)

  return (
    <div>
      <button onClick={() => add(-1)}>-</button>
      <i> </i>
      <Count />
      /
      <Count2 />
      <i> </i>
      <button onClick={() => {
        console.log(addReturn(1))
      }}>+</button>
    </div>
  )
}

const User = () => {
  console.log('Rendered User')
  const [user, fetchUser] = useUserStore(state => [state.user, state.fetchUser], shallow)

  useEffect(() => {
    fetchUser()
  }, [])

  return <div>
    <hr/>
    name: {user?.Cors}, official-web: {user?.Link}
  </div>
}

const SubUser = () => {
  console.log('Rendered SubUser')
  const user = useUserStore.getState().user

  console.log(user)

  useEffect(() => useUserStore.subscribe(state => console.log(state.user)), [])

  return <div>
    <hr/>
    SubUser
  </div>
}

function App() {
  console.log('Rendered App')

  return (
    <>
      <Counter />
      <User />
      <SubUser />
    </>
  )
}

export default App
