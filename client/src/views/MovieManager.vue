<template>
    <template v-if="currentAction === 'manager'">
        <div class="card mb-3 card-button">
            <div class="card-body text-center">
                <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> Thêm phim mới</button>
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

</template>
<script>
import MovieSevice from '@/services/movie.service'
import { get } from '@vueuse/core'
export default {
    data: () => ({
        currentAction: 'manager',
        movies: [],
    }),
    methods: {
        async getMovies () {
            try {
                this.movies = await MovieSevice.getAllMovie()
            } catch (err) {
                console.log(err)
            }
        },
        async deleteMovie (id) {
            if (confirm('Bạn có muốn xoá liên hệ này?')) {
                try {
                    await MovieSevice.deleteMovie(id)
                } catch (err) {
                    console.log(err)
                }
            }
            this.getMovies()
        }
    },
    created () {
        this.getMovies()
        console.log(this.movies)
    }
}
</script>
<style>
.card-button {
    border-radius: 0%;
    background: #222;
}
.movie-manager-table {
    background: #222;
    color: #fff;

}
.reload-button {
    margin-left: 20px;
}
</style>