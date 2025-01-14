<script setup>
  import Carousel from '../components/MediaDisplay.vue'
  import testPNG from '../components/media/astriTeam.jpg'
</script>
<template>
  <div class="about">
    <Carousel />
    <div class="aboutContent p-[50px] pl-[80px] pr-[80px] flex flex-col gap-[100px]">
      <div class="aboutBackground flex flex-row">
        <div class="flex flex-col w-[600px]">
          <h1 class="nameCardTitle text-4xl">My Background</h1>
          <p class="text-xl mt-[10px]">
            I was born and raised in Hong Kong until I came to Canada to 
            study at UBC. I originally majored in Economics in my first
            year then I swapped to Cognitive Systems as it fit my passions more!
            Throughout my bachelor degree, I took a wide range of computer
            science courses including data structures and algorithms, A.I,
            machine learning, system design, UI/UX, and HCI courses. I can
            confidently say that while I enjoyed dabbling in many different
            computer science fields, I most enjoyed learning about UI/UX as 
            although I am not a UI/UX designer, I believe that understanding
            UI/UX can benefit the designs of and web/desktop applications
            I may design. 
          </p>
        </div>
        <img :src="testPNG" class="ml-auto w-[600px] h-[420px]" />
      </div>
      <!-- add internship section -->
      <div class="aboutPassions flex flex-col ml-auto w-[600px]">
        <h1 class="nameCardTitle text-4xl">Passions</h1>
        <p>place holder</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>
