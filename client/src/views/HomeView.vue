<template>
    <div class="col-md-8">
        <HomeFilmList :dataFilm="filmList1" />
        <HomeFilmList :dataFilm="filmList2" />
    </div>
    <div class="col-md-4">
        <RelatedMovie />
    </div>
</template>
<script>
import MainSlider from '@/components/MainSlider.vue'
import HomeFilmList from '@/components/HomeFilmList.vue'
import RelatedMovie from '@/components/RelatedMovie.vue'
export default {
    components: {
        MainSlider,
        HomeFilmList,
        RelatedMovie,
    },
    data: () => ({
        filmList1: {
            name: "Phim HOT",
            data: [
                {
                    id: "123",
                    slug: "xem-phim-join-wick",
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
                    name: "HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY",
                    oname: "Harry Potter And The Sorcerers Stone (2001) (2022)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoi.com.vn/uploads/phim-moi-v1/mv5bnjq3nwnlnmqtmte5zs00mddmltlkzjutztblm2uxmgfimtu3xkeyxkfqcgdeqxvynjuwnzk3ndc2540._v1_uy1200_cr90252c0252c630252c1200_al_.jpg",
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
        },
        filmList2: {
            name: "Phim mới",
            data: [
                {
                    id: "123",
                    slug: "xem-phim-join-wick",
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
                    name: "HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY",
                    oname: "Harry Potter And The Sorcerers Stone (2001) (2022)",
                    views: "1.000.000",
                    status: "HD VIETSUB",
                    thumbnail: "https://phimmoi.com.vn/uploads/phim-moi-v1/mv5bnjq3nwnlnmqtmte5zs00mddmltlkzjutztblm2uxmgfimtu3xkeyxkfqcgdeqxvynjuwnzk3ndc2540._v1_uy1200_cr90252c0252c630252c1200_al_.jpg",
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