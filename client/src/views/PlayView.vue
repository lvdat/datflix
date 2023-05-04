<template>
    <div class="row">
        <div class="col-12">
        <video-player
            src="/src/assets/video.mp4"
            poster="/your-path/poster.jpg"
            controls
            videoWidth="100%"
            :loop="true"
            :volume="0.6"
            style="max-width: 700px; max-height: 360;"
        />
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