<script setup>
import Sidebar from '../components/worksSidebar.vue'
import portfolioSnapshot from '../components/media/portfolioSnapshot.png'
import DAhandlerSnapshot from '../components/media/DAhandlerSnapshot.png'
import anniversarySnapshot from '../components/media/anniversarySnapshot.png'
import { RouterView, useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router';
import { onMounted, ref, Transition } from 'vue';
const displayImage=ref();
const showWorks = ref(false);
function changeImage(e) {
    displayImage.value = e;
}

onMounted(()=>{
    if(useRoute().fullPath != '/works') {
        showWorks.value = true;
    }
});

onBeforeRouteUpdate(async (to,from)=> {
    if(from.path=='/works') {
        document.getElementById('initialDisplay').classList.add('fadeOut');
        document.getElementById('initialDisplay').classList.remove('fadeIn2');
        setTimeout(()=>{
            showWorks.value = true;
        },1000);
    }
    // if(to.path=='/works') {
    //     try {
    //         showWorks.value = false;
    //         document.getElementById('initialDisplay').classList.remove('fadeOut');
    //     } catch {

    //     }
    //     document.getElementById('initialDisplay').classList.add('fadeIn2');
    // }
});

</script>
<template>
<div class="works">
    <Transition v-if="!showWorks">
        <div id="initialDisplay" class="flex flex-row gap-[100px]">
            <Sidebar class="ml-[120px]" @DAhandler="changeImage(DAhandlerSnapshot)" @portfolio="changeImage(portfolioSnapshot)" @anniversary="changeImage(anniversarySnapshot)"/>
            <img id="displayImage" :src="displayImage" class="rounded-[50px] shadow-sidebar-gray shadow-md w-[70vw]">
        </div>
    </Transition>
    <RouterView id="workRouter" class="fadeIn2 opacity-0"/>
</div>
</template>

<style>
</style>
  