import axios from 'axios'

const config = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...config
    })
}

// Default API: no require login before fetch!