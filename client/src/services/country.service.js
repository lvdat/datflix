import createApiClient from './api.admin.service'

class CountryService {
    constructor(baseURL = '/api') {
        this.api = createApiClient(baseURL)
    }
    getAllCountry = async() => {
        return (await this.api.get('/countries')).data
    }
    createCountry = async(data) => {
        return (await this.api.post('/country', data)).data
    }
    deleteCountry = async(id) => {
        return (await this.api.delete(`/country/${id}`)).data
    }
}

export default new CountryService()