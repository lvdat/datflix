import axios from 'axios'
import { useAuthStore } from '@/stores/account'

export default (baseURL) => {
    const auth = useAuthStore()
    const config = {
        headers: {
            "token": auth.token,
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    }

    return axios.create({
        baseURL,
        ...config
    })
}

// Admin API: require login and have token before fetch!