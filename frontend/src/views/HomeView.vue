<script setup>
import NameCard from '../components/NameCard.vue';
import SkillsBar from '@/components/SkillsBar.vue';
import ExperienceBar from '@/components/ExperienceBar.vue';
import WelcomeMessage from '@/components/WelcomeMessage.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
<div class="flex flex-col items-center">
  <NameCard class="absolute top-10 z-10"/>
  <WelcomeMessage />
  <div class="grid grid-cols-[500px,1fr] mt-[40px]">
    <div class="text-white p-4"><SkillsBar /></div>
    <div class="text-white p-4"><ExperienceBar /></div>
  </div>
  <Footer />
</div>
</template>
