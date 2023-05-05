import createApiClient from './api.admin.service'

class MovieService {
    constructor(baseURL = '/api') {
        this.api = createApiClient(baseURL)
    }
    getAllMovie = async() => {
        return (await this.api.get('/movies')).data
    }
    createMovie = async(data) => {
        return (await this.api.post('/movie', data)).data
    }
    deleteMovie = async(id) => {
        return (await this.api.delete(`/movie/${id}`)).data
    }
}

export default new MovieService()