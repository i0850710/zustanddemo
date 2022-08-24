import create from 'zustand'
import produce from 'immer'
import { persist } from 'zustand/middleware'

export const useCounterStore = create(
  persist(
    (set, get) => ({
      count: 0,
      count2: { value: 0 },
      add: (by) => set(state => {
        const newCount = state.count + by
        const newState = { count: newCount }

        if (newCount % 5 === 0) {
          newState.count2 = { value: newCount / 5 }
        }

        return newState
      }),
      addReturn: (by) => {
        const count = get().count + by
        const count2 = count % 5 === 0 ? count / 5 : get().count2.value

        set(produce(draft => {
          draft.count = count

          if (count2 !== draft.count2.value) {
            draft.count2.value = count2
          }
        }))

        return [count, count2]
      },
    }),
    {
      name: 'counter-storage',
      partialize: state => ({
        count: state.count
      })
    }
  )
)
