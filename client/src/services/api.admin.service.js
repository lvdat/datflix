import axios from 'axios'
import { useAuthStore } from '@/stores/account'

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export default (baseURL) => {
    return axios.create({
        baseURL
    }).interceptors.request.use(
        (config) => {
            const auth = useAuthStore()
            if (auth.isAuth) {
                config.headers['token'] = auth.token
            }
            return {
                config,
                ...commonConfig
            }
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}

// Admin API: require login and have token before fetch!