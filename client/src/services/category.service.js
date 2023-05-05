import createApiClient from './api.admin.service'

class CategoryService {
    constructor(baseURL = '/api') {
        this.api = createApiClient(baseURL)
    }
    getAllCategory = async() => {
        return (await this.api.get('/categories')).data
    }
    createCategory = async(data) => {
        return (await this.api.post('/category', data)).data
    }
    deleteCategory = async(id) => {
        return (await this.api.delete(`/category/${id}`)).data
    }
}

export default new CategoryService()