<template>
    <div class="row">
        <div class="col-md-8">
            <video controls>
                <source src="/src/assets/video.mp4" type="video/mp4">
            </video>

            <div class="row p-3">
                <div class="card text-center play-action">
                    <div class="card-body">
                        <button type="button" class="btn btn-success"><i class="fas fa-cloud-arrow-down"></i> Tải về</button>
                        <button type="button" class="btn btn-warning"><i class="fas fa-heart text-danger"></i> Thêm vào yêu thích</button>
                    </div>
                </div>
            </div>

            <hr />

            <FilmInfo :showPlay="false" />

        </div>
        <div class="col-md-4">
            <RelatedMovie />
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import FilmInfo from '@/components/FilmInfo.vue'
import RelatedMovie from '../components/RelatedMovie.vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default ({
    components: {
    VideoPlayer,
    FilmInfo,
    RelatedMovie,
}
})
</script>
<style scoped>

video {
    width: 100%;
    height: auto;
}
.play-action {
    border-radius: 0%;
    background: #222;
}
.play-action > .card-body > button {
    margin: 5px 10px 5px 10px;
}
</style>