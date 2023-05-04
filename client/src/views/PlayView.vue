<template>
    <div class="row">
        <div class="col-md-8">
            <div class="row mb-4">
                <div class="d-flex play--info">
                    <div class="play--info__img">
                        <img src="https://phimmoiff.net/uploads/movies/dua-con-cua-than-tuong-120322-thumbnail.jpg" alt="">
                    </div>
                    <div class="play--info__meta">
                        <span class="play--info__meta--name">
                            ĐỨA CON CỦA THẦN TƯỢNG TẬP 1
                        </span>
                        <span class="play--info__meta--oname">
                            推しの子 (2023)
                        </span>
                        <span class="play--info__meta--bio">
                            推しの子 (2023)
                        </span>
                    </div>
                </div>
            </div>
            <video controls>
                <source src="/src/assets/video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="col-md-4">
            Related
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default ({
    components: {
        VideoPlayer
    }
})
</script>
<style scoped>
.play--info {

}
.play--info__img {
    width: 155px;
    height: 205px;
    position: relative;
}
.play--info__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s;
}
.play--info__meta {
    margin-left: 20px;
}
.play--info__meta--name, .play--info__meta--oname {
    display: block;
}
.play--info__meta--name {
    font-size: 26px;
    text-transform: uppercase;
    font-family: 'UTMCafeta';
    color: rgb(0, 255, 133);
}
.play--info__meta--oname {
    font-size: 12px;
    color: #999;
}
video {
    width: 100%;
    height: auto;
}
</style>