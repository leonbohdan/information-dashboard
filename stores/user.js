import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({ id: null })
  const userId = computed(() => user.id)
  function addUser(user) {
    user.value = user
  }
  function removeUser(user) {
    user.value = { id: null }
  }

  return { user, userId, addUser, removeUser }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
