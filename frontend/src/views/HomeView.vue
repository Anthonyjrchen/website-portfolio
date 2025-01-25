<script setup>
import NameCard from '../components/NameCard.vue';
import SkillsBar from '@/components/SkillsBar.vue';
import ExperienceBar from '@/components/ExperienceBar.vue';
import WelcomeMessage from '@/components/WelcomeMessage.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue'
onMounted(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-right');
      }
    });
    });
    const targetElements = document.querySelectorAll('.homeElem');
    targetElements.forEach((element)=>observer.observe(element));

    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn2');
      }
    });
    });
    const targetElements1 = document.querySelectorAll('.homeElem1');
    targetElements1.forEach((element)=>observer1.observe(element));
  });

</script>

<template>
<div class="flex flex-col items-center overflow-x-hidden">
  <NameCard class="nameCard slide-in-right absolute top-10 z-10"/>
  <WelcomeMessage class="welcomeMessage" />
  <div class="grid grid-cols-[500px,1fr] mt-[40px]">
    <div class="homeElem1 opacity-0 text-white p-4"><SkillsBar /></div>
    <div class="homeElem1 opacity-0 text-white p-4"><ExperienceBar /></div>
  </div>
  <Footer />
</div>
</template>
