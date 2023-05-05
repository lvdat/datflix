<template>
    <div class="row">
        <div class="col-md-8">
            <FilmInfo />

        </div>
        <div class="col-md-4">

        </div>
    </div>
</template>

<script>
import FilmInfo from '../components/FilmInfo.vue'
export default {
    components: {
        FilmInfo,
    },
    props: {
        name: {
            type: String,
        },
        oname: {
            type: String,
        },
        poster: {
            type: String,
        },
        bio: {
            type: String,
        },
        id: {
            type: String,
        },
    }
}
</script>