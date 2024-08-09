import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({ posts: [], currentPostId: null }),
  getters: {
    getCurrentPost: (state) => state.posts.find((post) => post.id === state.currentPostId)
  },
  actions: {
    setCurrentPostId(id) {
      this.currentPostId = id
    },
    removeCurrentPostId() {
      this.currentPostId = null
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
