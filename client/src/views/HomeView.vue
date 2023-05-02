<template>
    <div class="row">
        <MainSlider />
    </div>
    <div class="col-md-8">
        <HomeFilmList :dataFilm="filmList1" />
    </div>
    <div class="col-md-4" style="border: 1px solid #fff">
        
    </div>
</template>
<script>
import MainSlider from '@/components/MainSlider.vue'
import HomeFilmList from '../components/HomeFilmList.vue'
export default {
    components: {
        MainSlider,
        HomeFilmList
    },
    data: () => ({
        filmList1: {
            name: "Phim HOT",
            data: [
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
                {
                    name: "KẺ CẮP MẶT TRĂNG 1",
                    oname: "Despicable Me (2022)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoi.com.vn/uploads/phim-moi/yufh6xe-250x350.jpg",
                },
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
                {
                    name: "JOHN WICK (2023)",
                    oname: "JOHN WICK (2023)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoiyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
                },
            ]
        }
    }),
}
</script>