<script setup>
import Sidebar from '../components/worksSidebar.vue'
import portfolioSnapshot from '../components/media/portfolioSnapshot.png'
import DAhandlerSnapshot from '../components/media/DAhandlerSnapshot.png'
import anniversarySnapshot from '../components/media/anniversarySnapshot.png'
import { RouterView, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { ref, Transition } from 'vue';
const displayImage=ref(portfolioSnapshot);
const showWorks = ref(false);
function changeImage(e) {
    displayImage.value = e;
}

onBeforeRouteUpdate(async (to,from)=> {
    if(from.path=='/works') {
        document.getElementById('initialDisplay').classList.add('fadeOut');
        setTimeout(()=>{
            showWorks.value = true;
        },1000);
    }
})

</script>
<template>
<div class="works">
    <Transition v-if="!showWorks">
        <div id="initialDisplay" class="flex flex-row gap-[150px]">
            <Sidebar class="ml-[120px]" @DAhandler="changeImage(DAhandlerSnapshot)" @portfolio="changeImage(portfolioSnapshot)" @anniversary="changeImage(anniversarySnapshot)"/>
            <img id="displayImage" :src="displayImage" width="1200" class="rounded-[50px] shadow-sidebar-gray shadow-md">
        </div>
    </Transition>
    <RouterView id="workRouter" class="fadeIn2 opacity-0"/>
</div>
</template>

<style>
</style>
  