import create from 'zustand'
import { createUserSlice } from './slices/user.js'
import { createCounterSlice } from './slices/counter.js'

export const useStore = create()((...a) => {
  return {
    ...createUserSlice(...a),
    ...createCounterSlice(...a),
  }
})
