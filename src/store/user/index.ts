import create from 'zustand'
import { useCounterStore } from '../counter'

const { getState: getCounterState } = useCounterStore

type User = {
  Cors: string
  Link: string
}

type UserState = {
  user: null | User
  fetchUser: () => Promise<void>
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  async fetchUser() {
    const res = await fetch('https://api.publicapis.org/random')
    set({ user: (await res.json()).entries[0] })
    getCounterState().add(1)
  }
}))
