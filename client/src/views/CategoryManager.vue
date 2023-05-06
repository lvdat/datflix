<template>
    <template v-if="currentAction === 'manager'">
        <div class="card mb-3 card-button">
            <div class="card-body text-center">
                <button @click="changeAction('create')" type="button" class="btn btn-success"><i class="fas fa-plus"></i> Thêm thể loại</button>
                <button @click="getCategories()" class="btn btn-warning reload-button"><i class="fas fa-rotate-right"></i> Làm mới</button>
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
                <tr v-for="item in categories" :key="item._id">
                    <th scope="row">{{ item._id }}</th>
                    <td>{{ item.title }}</td>
                    <td><button @click="deleteCategory(item._id)" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
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
        <form @submit.prevent="addCategory()" class="mb-3">
            <div class="alert alert-warning mb-3" v-show="error" role="alert">
                {{ error }}
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" v-model="title" autofocus="true" required />
                <label for="floatingInput">Tiêu đề</label>
            </div>

            <div class="d-grid gap-2">
                <button class="btn btn-lg btn-success" type="submit"><b>Thêm Chuyên mục</b></button>
            </div>
        </form>
    </template>

</template>
<script>
import CategorySevice from '@/services/category.service'
import { get } from '@vueuse/core'
export default {
    data: () => ({
        currentAction: 'manager',
        categories: [],
        error: null,
        title: '',
        slug: '',
    }),
    methods: {
        async getCategories () {
            try {
                this.categories = await CategorySevice.getAllCategory()
            } catch (err) {
                console.log(err)
            }
        },
        async addCategory () {
            try {
                await CategorySevice.createCategory({
                    title: this.title,
                })
                this.changeAction('manager')
                this.getCategories()
            } catch (err) {
                console.log(err)
            }
        },
        async deleteCategory (id) {
            if (confirm('Bạn có muốn xoá chuyên mục này?')) {
                try {
                    await CategorySevice.deleteCategory(id)
                } catch (err) {
                    console.log(err)
                }
            }
            this.getCategories()
        },
        changeAction (action) {
            this.currentAction = action
        }
    },
    created () {
        this.getCategories()
    },
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