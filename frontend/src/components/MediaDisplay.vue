<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import '@splidejs/vue-splide/css/sea-green';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import astriTeam from '../components/media/astriTeam.jpg'
import park from '../components/media/park.jpg'
import vballTeam from '../components/media/vballTeam.jpg'
import serve from '../components/media/volleyballServe.mov'
import croppedServe from '../components/media/croppedServe.mp4'
const options = ref({
    rewind:true,
    gap:'1rem',
    autoplay:true,
    height:'500px',
    width:'calc(100vw - 17px)',
    padding:'0',
    pauseOnHover:'true',
    })
</script>

<template>
    <div class="splideWrap m-0">
        <Splide class="splide" :options="options" :has-track="false" aria-label="My Favorite Images">
            <div style="position: relative">
                <SplideTrack class="splideTrack">
                    <SplideSlide>
                        <img :src="vballTeam" alt="" class="">
                    </SplideSlide>
                    <SplideSlide>
                        <video autoplay controls="controls" width="100%" name="Serve">
                            <source :src="serve">
                        </video>
                    </SplideSlide>
                    <SplideSlide>
                        <img :src="park" alt="" class="">
                    </SplideSlide>
                </SplideTrack>
            </div>

            <div class="splide__progress">
                <div class="splide__progress__bar">
                </div>
            </div>
        </Splide>
    </div>
</template>