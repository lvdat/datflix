<template>
    <div class="row mb-3">
        <div class="col-md-4">
            <div class="list-group admin-leftbar">
                <a @click="setAction('movie')" class="list-group-item list-group-item-action active">
                    Quản lý phim
                </a>
                <a @click="setAction('genre')" class="list-group-item list-group-item-action">Quản lý thể loại</a>
                <a @click="setAction('country')" class="list-group-item list-group-item-action">Quản lý quốc gia</a>
                <a @click="setAction('episode')" class="list-group-item list-group-item-action">Quản lý tập phim</a>
            </div>
        </div>
        <div class="col-md-8">
            <MovieManager />
        </div>
    </div>
</template>
<script>
import MovieManager from './MovieManager.vue'
export default {
    components: {
        MovieManager,
    },
    data: () => ({
        currentAction: 'movie'
    }),
    methods: {
        setAction (action) {
            this.currentAction = action
        }
    },
    created () {
        this.currentAction = 'movie'
    }
}
</script>
<style>
.admin-leftbar {
    border-radius: 0%;
    border: 1px solid #000;
}
.list-group-item-action {
    cursor: pointer;
    border: none;
    background: #424040;
    color: #fff;
}
.list-group-item-action.active {
    background: #000;
}
</style>