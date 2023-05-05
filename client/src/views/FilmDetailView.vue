<template>
    <div class="row">
        <div class="col-md-8">
            <FilmInfo />

        </div>
        <div class="col-md-4">
            <RelatedMovie />
        </div>
    </div>
</template>

<script>
import FilmInfo from '../components/FilmInfo.vue'
import RelatedMovie from '../components/RelatedMovie.vue'
export default {
    components: {
        FilmInfo,
        RelatedMovie,
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