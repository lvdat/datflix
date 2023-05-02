<template>
    <div class="row mb-3">
        <div class="content-header">
            <h2>
                Phim mới
            </h2>
        </div>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                    <div class="film-card">
                        <img src="https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg" alt="{{ slide }}" />
                        <div class="film-card__status">
                            HD VIETSUB
                        </div>
                    </div>
                    <div class="movie-meta">
                        <div class="movie-meta_name">
                            John Wick (2023)dasdasdaaaaaaaaaaaaaaaaaa
                        </div>
                        <div class="movie-meta_oname">
                            John Wick (2023)
                        </div>
                        <div class="movie-meta_views">
                            1tr lượt xem
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    props: {

    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            360: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            540: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
        }
    })
}
</script>
<style scoped>
.content-header {
    float: left;
    width: 100%;
    padding: 15px 10px;
    line-height: 20px;
}
.content-header h2 {
    border-left: solid 3px #408bea;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 500;
}
.carousel__item {
    cursor: pointer;
}
.film-card {
    width: 155px;
    height: 205px;
    /*border: 1px solid #fff;*/
    position: relative;
}
.film-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s;
}
.film-card__status {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 10px;
    font-weight: 700;
    padding: 5px 10px;
    background: rgb(8, 90, 50);
    color: #fff;
}
.movie-meta {
    /*border: 1px solid #fff;*/
    background-color: #131313;
    width: 155px;
    text-align: left;
    font-size: 14px;
    padding: 5px;
}
.movie-meta_name, .movie-meta_oname {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie-meta_name {
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(0, 255, 133);

}
.movie-meta_oname {
    color: #ddd;
    font-size: 12px;
}
.movie-meta_views {
    color: #ddd;
    font-size: 12px;
}
</style>