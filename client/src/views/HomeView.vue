<template>
    <div class="row">
        <MainSlider />
    </div>
    <div class="col-md-8">
        <HomeFilmList />
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
    }
}
</script>