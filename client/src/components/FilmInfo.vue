<template>
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
                <span class="play--info__meta--info mb-3">
                    Nhật Bản | 50 tập | <span style="color: rgba(255,255,255,.28); font-size: 16px">2023</span>
                </span>
            </div>
        </div>
    </div>
    <hr />
    <div class="row mb-4">
        <div class="movie-info-nav-tabs">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation" v-show="showPlay">
                    <button :class="playClass" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" :aria-selected="showPlay"><i class="fas fa-circle-play"></i> Xem phim</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button :class="infoClass" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" :aria-selected="!showPlay"><i class="fas fa-circle-info"></i> Thông tin</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div :class="playTabClass" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    Play
                </div>
                <div :class="infoTabClass" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div class="card film-bio">
                        <div class="card-body">
                            <p>
                                <b>Đứa Con Của Thần Tượng - 推しの子</b> "Trong giới thần tượng, nói dỗi chính là vũ khí." Goro, người làm bác sĩ sản phụ khoa ở một thành phố nhỏ, hàng ngày sống một cuộc sống không liên quan gì đến ngành giải trí. Mặt khác, thần tượng Hoshino Ai mà anh "ủng hộ" bắt đầu thăng hạng trong danh sách... [ Xem thêm]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr />
    <div class="row">
        <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="10"></div>
    </div>
</template>
<script>
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating,
    },
    props: {
        showPlay: {
            type: Boolean,
            default: true,
        },
        id: {
            type: String
        }
    },
    data: () => ({
        playClass: 'nav-link active',
        infoClass: 'nav-link',
        playTabClass: 'tab-pane fade show active',
        infoTabClass: 'tab-pane fade'
    }),
    created () {
        if (!this.showPlay) {
            this.infoClass = 'nav-link active',
            this.playClass = 'nav-link',
            this.playTabClass = 'd-none',
            this.infoTabClass = 'tab-pane fade show active'
        }
    }
}
</script>
<style>
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
.play--info__meta--bio > .card, .film-bio {
    max-width: 100%;
    border-radius: 0%;
    background: #222;
    color: #bbb;
    font-size: 12px;
}
.movie-info-nav-tabs {
    
}
.play--info__meta--info {
    font-size: 16px;
    color: rgba(255,255,255,.6);
}
</style>