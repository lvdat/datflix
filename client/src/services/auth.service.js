import createApiClient from './api.admin.service'
import { useAuthStore } from '@/stores/account'

class AuthService {
    constructor(baseURL = '/api/auth') {
        this.api = createApiClient(baseURL)
    }
    login = async(data) => {
        const authStore = useAuthStore()
        const res = (await this.api.post('/login', data)).data
        if (res.token) {
            authStore.login(res.token)
        }
        return res
    }

}