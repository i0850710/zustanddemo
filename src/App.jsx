import { useCounterStore } from './store/counter/index.js'
import shallow from 'zustand/shallow'
import { useUserStore } from './store/user/index.js'
import { useEffect } from 'react'
import { useStore } from './store/index.js'

const ForStoreCount = () => {
  console.log('Rendered ForStoreCount')
  const count = useCounterStore(state => state.count)

  return count
}

const ForStoreCounter = () => {
  console.log('Rendered ForStoreCounter')
  // const [addReturn, add] = useCounterStore(state => [state.addReturn, state.add], shallow)
  const addReturn = useCounterStore(state => state.addReturn)
  const add = useCounterStore(state => state.add)

  return (
    <div>
      <button onClick={() => add(-1)}>-</button>
      <ForStoreCount />
      <button onClick={() => {
        console.log(addReturn(1))
      }}>+</button>
    </div>
  )
}

const ForStoreUser = () => {
  console.log('Rendered ForStoreUser')
  const [user, fetchUser] = useUserStore(state => [state.user, state.fetchUser], shallow)

  useEffect(() => {
    fetchUser()
  }, [])

  return <div>
    <hr/>
    name: {user?.Cors}, official-web: {user?.Link}
  </div>
}

const ForStoreSubUser = () => {
  console.log('Rendered ForStoreSubUser')
  const user = useUserStore.getState().user

  console.log(user)

  useEffect(() => useUserStore.subscribe(state => console.log(state.user)), [])

  return <div>
    <hr/>
    SubUser
  </div>
}

const ForStore = () => {
  console.log('Rendered ForStore')

  return (
    <>
      <ForStoreCounter />
      <ForStoreUser />
      <ForStoreSubUser />
    </>
  )
}












const ForSlicesCount = () => {
  console.log('Rendered ForSlicesCount')
  const count = useStore(state => state.count)

  return count
}

const ForSlicesCounter = () => {
  console.log('Rendered ForSlicesCounter')
  // const [addReturn, add] = useCounterStore(state => [state.addReturn, state.add], shallow)
  const addReturn = useStore(state => state.addReturn)
  const add = useStore(state => state.add)

  return (
    <div>
      <button onClick={() => add(-1)}>-</button>
      <ForSlicesCount />
      <button onClick={() => {
        console.log(addReturn(1))
      }}>+</button>
    </div>
  )
}

const ForSlicesUser = () => {
  console.log('Rendered ForSlicesUser')
  const [user, fetchUser] = useStore(state => [state.user, state.fetchUser], shallow)

  useEffect(() => {
    fetchUser()
  }, [])

  return <div>
    <hr/>
    name: {user?.Cors}, official-web: {user?.Link}
  </div>
}

const ForSlicesSubUser = () => {
  console.log('Rendered ForSlicesSubUser')
  const user = useStore.getState().user

  console.log(user)

  useEffect(() => useStore.subscribe(state => console.log(state.user)), [])

  return <div>
    <hr/>
    SubUser
  </div>
}

const ForSlices = () => {
  console.log('Rendered ForSlices')

  return (
    <>
      <ForSlicesCounter />
      <ForSlicesUser />
      <ForSlicesSubUser />
    </>
  )
}

function App() {
  return (
    <>
      <h1>ForStore</h1>
      <ForStore />

      <h1>ForSlices</h1>
      <ForSlices />
    </>
  )
}

export default App
