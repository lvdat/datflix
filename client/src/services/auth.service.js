import createApiClient from './api.default.service'
import { useAuthStore } from '@/stores/account'

class AuthService {
    constructor(baseURL = '/api/auth') {
        this.api = createApiClient(baseURL)
    }
    login = async(data) => {
        const authStore = useAuthStore()
        const res = (await this.api.post('/login', data))
        if (res.data.token) {
            authStore.login(res.data.token, data.username)
        }
        return res
    }

}

export default new AuthService()