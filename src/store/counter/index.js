import create from 'zustand'

export const useCounterStore = create((set, get) => ({
  count: 0,
  add: (by) => set(state => ({ count: state.count + by })),
  addReturn: (by) => {
    const count = get().count + 1

    set({ count })

    return count
  },
}))
