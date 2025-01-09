<script setup>
import profilePicture from './icons/antoAstri_square.jpg';
import { Separator } from 'radix-vue';
</script>
<template>
    <!-- large display "HELLO, MY NAME IS (ANTHONY CHEN IN BIG BOLD LETTERS) with photo attached" -->
    <div class="relative min-w-[1000px] max-w-[1000px] mt-[30px] overflow-x-auto">
        <div class="relative z-2 w-[600px] h-[450px] mt-[50px]">
            <h1 class="text-xs">HELLO, MY NAME IS</h1>
            <Separator class="SeparatorIntro"/>
            <Separator class="SeparatorNameCard"/>
            <h2 class="nameCardTitle font-semibold text-6xl mt-[5px]">Anthony Chen</h2>
            <h3 class="nameCardTitle text-3xl mt-[5px] text-white">Full Stack Software Developer</h3>
        </div>
        <img :src="profilePicture" class="absolute right-0 top-0 z-3 w-[500px] h-[500px] rounded-full" />
    </div>
</template>