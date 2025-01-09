<script setup>
import profilePicture from '../components/icons/antoAstri_square.jpg'
import { Separator } from 'radix-vue'
</script>

<template>
<!-- large display "HELLO, MY NAME IS (ANTHONY CHEN IN BIG BOLD LETTERS) with photo attached" -->
<div class="w-[1000px] mt-[30px]" style="position: relative; z-index: 1; background-color: aqua;">
  <div id="overlay_text" class="w-[600px] h-[500px] mt-[50px]" style="position: absolute; left:0; z-index: 2;">
    <h1 class="text-xs">HELLO, MY NAME IS</h1>
    <Separator class="SeparatorIntro"/>
    <Separator class="SeparatorNameCard"/>
    <h2 class="nameCardTitle font-semibold text-6xl mt-[5px]">Anthony Chen</h2>
  </div>
  <img :src="profilePicture" class="w-[500px] h-[500px] rounded-full" style="position: absolute; z-index: 3; right:0;" />
  
</div>
<!-- ADD LIST OF LANGUAGE SKILLS/FRAMEWORKS AND THEN ON THE RIGHT ADD TIMELINE OF EDUCATION AND TIMELINE -->

</template>
