
export const createCounterSlice = (set, get) => ({
  count: 0,
  add: (by) => set(state => ({ count: state.count + by })),
  addReturn: (by) => {
    const count = get().count + by

    set({ count })

    return count
  },
})
