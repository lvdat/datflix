<template>
    <template v-if="currentAction === 'manager'">
        <div class="card mb-3 card-button">
            <div class="card-body text-center">
                <button @click="changeAction('create')" type="button" class="btn btn-success"><i class="fas fa-plus"></i> Thêm phim mới</button>
                <button @click="getMovies()" class="btn btn-warning reload-button"><i class="fas fa-rotate-right"></i> Làm mới</button>
            </div>
        </div>
        <table class="table movie-manager-table">
            <thead>
                <tr>
                    <th scope="col" style="width:30%">ID</th>
                    <th scope="col" style="width:60%">Tên</th>
                    <th scope="col" style="width:10%">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in movies" :key="item._id">
                    <th scope="row">{{ item._id }}</th>
                    <td>{{ item.title }}</td>
                    <td><button @click="deleteMovie(item._id)" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
    </template>
    <template v-else-if="currentAction === 'create'">
        <div class="card mb-3 card-button">
            <div class="card-body text-center">
                <button @click="changeAction('manager')" type="button" class="btn btn-success"><i class="fas fa-plus"></i> Quản lý</button>
            </div>
        </div>
        <form @submit.prevent="addMovie()" class="mb-3">
            <div class="alert alert-warning mb-3" v-show="error" role="alert">
                {{ error }}
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" v-model="title" autofocus="true" required />
                <label for="floatingInput">Tiêu đề</label>
            </div>
            <div class="form-floating mb-3">
                <textarea rows="4" class="form-control" id="floatingDes" v-model="description" required></textarea>
                <label for="floatingDes">Tóm tắt nội dung</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingYear" v-model="year" minlength="4" required />
                <label for="floatingYear">Năm sản xuất</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingDuration" v-model="duration" required />
                <label for="floatingDuration">Thời lượng</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingThumbnail" v-model="thumbnail" required />
                <label for="floatingThumbnail">Link Thumbnail</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingThumbnail" v-model="video" required />
                <label for="floatingThumbnail">Link video phim</label>
            </div>
            <p>Thể loại</p>
            <div class="card mb-3 card-button">
                <div class="card-body">
                    <div v-for="item in categories" :key="item._id">
                        <input type="checkbox" :value="item._id" v-model="selectedCategories" />
                        {{ item.title }}
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-lg btn-success" type="submit"><b>Thêm Movie</b></button>
            </div>

        </form>
    </template>

</template>
<script>
import MovieSevice from '@/services/movie.service'
import CategorySevice from '@/services/category.service'
import { get } from '@vueuse/core'
export default {
    data: () => ({
        currentAction: 'manager',
        movies: [],
        error: null,
        title: '',
        description: '',
        year: '',
        duration: '',
        thumbnail: '',
        video: '',
        categories: [],
        selectedCategories: [],
    }),
    methods: {
        async getMovies () {
            try {
                this.movies = await MovieSevice.getAllMovie()
            } catch (err) {
                console.log(err)
            }
        },
        async addMovie () {
            try {
                await MovieSevice.createMovie({
                    title: this.title,
                    description: this.description,
                    year: this.year,
                    duration: this.duration,
                    thumbnail: this.thumbnail,
                    genres: this.selectedCategories,
                })
                this.changeAction('manager')
                this.getMovies()
            } catch (err) {
                console.log(err)
            }
            this.resetData()
        },
        async deleteMovie (id) {
            if (confirm('Bạn có muốn xoá phim này?')) {
                try {
                    await MovieSevice.deleteMovie(id)
                } catch (err) {
                    console.log(err)
                }
            }
            this.getMovies()
        },
        changeAction (action) {
            this.currentAction = action
        },
        async getCategoriesList () {
            this.categories = await CategorySevice.getAllCategory()
        },
        resetData () {
            this.title = ''
            this.description = ''
            this.year = ''
            this.duration = ''
            this.thumbnail = ''
            this.selectedCategories = []
        }
    },
    created () {
        this.getMovies()
        this.getCategoriesList()
        console.log(this.movies)
    },
}
</script>
<style>
.card-button {
    border-radius: 0%;
    background: #222;
    color: #fff;
}
.movie-manager-table {
    background: #222;
    color: #fff;

}
.reload-button {
    margin-left: 20px;
}

</style>