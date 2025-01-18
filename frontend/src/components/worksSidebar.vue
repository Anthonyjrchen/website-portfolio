<script setup>
import { onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { Separator } from 'radix-vue';
import { Icon } from '@iconify/vue';
import {
  MenubarMenu,
  MenubarTrigger,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuIndicator,
} from 'radix-vue'

onMounted(()=>{
    document.getElementById(useRoute().fullPath.split("/")[2]).disabled=true;
});

onBeforeRouteUpdate(async (to,from)=> {
    document.getElementById(to.fullPath.split("/")[2]).disabled=true;
    try {
        document.getElementById(from.fullPath.split("/")[2]).disabled=false;
    } catch (error) {
        
    }    
})

</script>

<template>
    <div class="flex flex-col">
        <h1 class="nameCardTitle text-4xl mb-[30px]">My Recent Works</h1>
        <NavigationMenuRoot
        v-model="currentTrigger"
            class="sidebarRoot shadow-sidebar-gray shadow-[0_2px_10px] flex flex-col justify-between items-center bg-white rounded-[6px]"
        >
            <div class="flex">
                <div class="flex flex-col items-center">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <RouterLink to="/works/portfolio" @mouseenter="$emit('portfolio')">
                                <NavigationMenuTrigger
                                    id="portfolio" class="sidebarTrigger flex flex-row items-center gap-[10px] py-2 px-3 outline-none select-none leading-none rounded text-[20px]"
                                >
                                    <!-- <button class="flex flex-row items-center gap-[10px]"> -->
                                        <Icon icon="gg:website" width="24" height="24" />
                                        <h1 class="nameCardTitle">Portfolio</h1>
                                    <!-- </button> -->
                                </NavigationMenuTrigger>
                            </RouterLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <RouterLink to="/works/DAhandler" @mouseenter="$emit('DAhandler')">
                                <NavigationMenuTrigger
                                    id="DAhandler" class="sidebarTrigger flex flex-row items-center gap-[10px] py-2 px-3 outline-none select-none leading-none rounded text-[20px]"
                                    >
                                    <!-- <button class="flex flex-row items-center gap-[10px]" v-on:click="seeCurrent()"> -->
                                        <Icon icon="material-symbols:event-outline" width="24" height="24" />
                                        <h1 class="nameCardTitle">DAhandler</h1>
                                    <!-- </button> -->
                                </NavigationMenuTrigger>
                            </RouterLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <RouterLink to="/works/anniversary" @mouseenter="$emit('anniversary')">
                                <NavigationMenuTrigger
                                    id="anniversary" class="sidebarTrigger flex flex-row items-center gap-[10px] py-2 px-3 outline-none select-none leading-none rounded text-[20px]"
                                >
                                    <!-- <button class="flex flex-row items-center gap-[10px]" v-on:click="seeCurrent()"> -->
                                        <Icon icon="mingcute:anniversary-line" width="24" height="24" />
                                        <h1 class="nameCardTitle">Anniversary Website</h1>
                                    <!-- </button> -->
                                </NavigationMenuTrigger>
                            </RouterLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>  
            </div>
        </NavigationMenuRoot
        >
    </div>
</template>