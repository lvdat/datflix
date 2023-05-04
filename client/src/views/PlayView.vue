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
                        <span class="play--info__meta--oname mb-3">
                            推しの子 (2023)
                        </span>
                        <div class="play--info__meta--bio">
                            <div class="card">
                                <div class="card-body">
                                    Đứa Con Của Thần Tượng - 推しの子 "Trong giới thần tượng, nói dỗi chính là vũ khí." Goro, người làm bác sĩ sản phụ khoa ở một thành phố nhỏ, hàng ngày sống một cuộc sống không liên quan gì đến ngành giải trí. Mặt khác, thần tượng Hoshino Ai mà anh "ủng hộ" bắt đầu thăng hạng trong danh sách... [ Xem thêm]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="content-header">
                    <h2>
                        Phim đề xuất
                    </h2>
                </div>
                <div class="related-movie">
                    <div class="related-movie-item d-flex mb-3" v-for="i in 5" :key="id">
                        <img src="https://phimmoiff.net/uploads/movies/dua-con-cua-than-tuong-120322-thumbnail.jpg" alt="">
                        <div class="related-movie-info">
                            <span class="related-movie-item-name">
                                <b>ĐỨA CON CỦA THẦN TƯỢNG</b>
                            </span>
                            <span class="play--info__meta--oname mb-3">
                                推しの子 (2023)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
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
    flex-shrink: 0;
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
.play--info__meta--bio > .card {
    max-width: 100%;
    border-radius: 0%;
    background: #222;
    color: #bbb;
    font-size: 12px;
}
.related-movie-item {
    width: 100%;
    flex-shrink: 0;
}
.related-movie-info {
    margin-left: 10px;
}
.related-movie-item-name {
    color: rgb(0, 255, 133);
    display: block;
    font-weight: bold;
}
.related-movie-item img {
    width: 30%;
    height: auto;
}
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