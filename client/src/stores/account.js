import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: useLocalStorage('token', null),
    }),
    getters: {
        isAuth: (state) => !!state.token,
    },
    actions: {
        login(token) {
            this.token = token
        },
        logout() {
            this.token = null
        }
    }

})