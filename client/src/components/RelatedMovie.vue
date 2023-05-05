<template>
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
</template>
<script>
export default {

}
</script>
<style scoped>
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
</style>