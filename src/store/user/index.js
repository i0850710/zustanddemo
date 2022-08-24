import create from 'zustand'

export const useUserStore = create(set => ({
  user: null,
  async fetchUser() {
    const res = await fetch('https://api.publicapis.org/random')
    set({ user: (await res.json()).entries[0] })
  }
}))
