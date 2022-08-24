
export const createUserSlice = set => ({
  user: null,
  async fetchUser() {
    const res = await fetch('https://api.publicapis.org/random')
    set({ user: (await res.json()).entries[0] })
  }
})
