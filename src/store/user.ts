import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStateStore = defineStore('user', () => {
  const isBigFire = ref(false)

  return {
    isBigFire,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStateStore, import.meta.hot))
