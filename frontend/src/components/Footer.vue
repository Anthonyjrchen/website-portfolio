<script setup>
import logo from "./icons/AClogo_white.png"
import { Icon } from '@iconify/vue'
</script>
<template>
    <div class="footer flex flex-col items-center">
        <div class="w-[60px] h-[60px] mt-[15px] mb-[15px]">
            <img :src="logo" alt="logo" class="w-full h-full object-contain " />
        </div>
        <div class="flex flex-rowtext-center text-dark-white items-center">
            Handcrafted by me <Icon class="ml-[4px] mr-[4px]" icon="solar:copyright-linear" width="20" height="20" />
            Anthony Chen, 2025
        </div>
        <div class="text-xs text-dark-white mt-[15px] flex flex-row">
            Made with <Icon class="ml-[4px] mr-[4px]" icon="logos:vue" width="20" height="20" /> Vue.JS        </div>
        </div>
</template>