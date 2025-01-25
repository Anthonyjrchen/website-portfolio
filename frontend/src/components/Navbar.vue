<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  MenubarMenu,
  MenubarRoot,
  MenubarTrigger,
} from 'radix-vue'
import logo from "./icons/AClogo_white.png"
import logoText from "./icons/AnthonyChen_text_transparent.png"

const currentMenu = ref('')
</script>

<template>
  <MenubarRoot
    v-model="currentMenu"
    class="MenubarRoot flex justify-between items-center shadow-[0_2px_0] shadow-white"
  >
    <RouterLink to="/" class="flex items-center">
      <div class="w-[60px] h-[60px] mt-[15px] mb-[15px]">
          <img :src="logo" alt="logo" class="w-full h-full object-contain " />
      </div>
      <div class="w-[100px] h-[60px] ml-[15px]">
          <img :src="logoText" alt="logoText" class="w-full h-full object-contain " />
      </div>
    </RouterLink>
    <div class="flex">
      <div class="flex space-x-[10px]">
        <MenubarMenu>
          <MenubarTrigger
            class="MenubarTrigger py-2 px-3 outline-none select-none leading-none rounded text-[20px] text-white flex items-center justify-between gap-[2px]"
          >
            <RouterLink to="/">home</RouterLink>
          </MenubarTrigger>
          <MenubarTrigger
            class="MenubarTrigger py-2 px-3 outline-none select-none leading-none rounded text-[20px] text-white flex items-center justify-between gap-[2px]"
          >
            <RouterLink to="/about">about</RouterLink>
          </MenubarTrigger>
          <MenubarTrigger
            class="MenubarTrigger py-2 px-3 outline-none select-none leading-none rounded text-[20px] text-white flex items-center justify-between gap-[2px]"
          >
          <RouterLink to="/works">works</RouterLink>
          </MenubarTrigger>
          <MenubarTrigger
            class="MenubarTrigger py-2 px-3 outline-none select-none leading-none rounded text-[20px] text-white flex items-center justify-between gap-[2px]"
          >
          <RouterLink to="/resume">resume</RouterLink>
          </MenubarTrigger>
        </MenubarMenu>
      </div>  
      <div class="flex ml-[50px] gap-[10px]">
        <MenubarMenu>
          
          <MenubarTrigger class="MenubarTrigger outline-none select-none leading-none rounded text-[20px] text-white flex items-center justify-between gap-[2px]">
            <a href="https://www.linkedin.com/in/anthony-chen-999804221/" target="_blank">
              <Icon icon="mdi:linkedin" width="35" height="35" />
            </a>
          </MenubarTrigger>
          <MenubarTrigger href="https://github.com/Anthonyjrchen" class="MenubarTrigger outline-none select-none leading-none rounded text-[20px] text-white flex items-center justify-between gap-[2px]">
            <a href="https://github.com/Anthonyjrchen" target="_blank">
              <Icon icon="mdi:github" width="35" height="35" />
            </a>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
  </div>
  </MenubarRoot>
</template>
<style scoped>
.MenubarTrigger:hover {
  background-color: #20B2AA;
}
</style>