import create from 'zustand'
import { useCounterStore } from '../counter/index.js'

const { getState: getCounterState } = useCounterStore

export const useUserStore = create(set => ({
  user: null,
  async fetchUser() {
    const res = await fetch('https://api.publicapis.org/random')
    set({ user: (await res.json()).entries[0] })
    getCounterState().add(1)
  }
}))
