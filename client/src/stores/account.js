import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        username: useLocalStorage('username', null),
        token: useLocalStorage('token', null),
    }),
    getters: {
        isAuth: (state) => !!state.token,
    },
    actions: {
        login(token, username) {
            this.token = token
            this.username = username
        },
        logout() {
            this.token = null
        }
    }

})