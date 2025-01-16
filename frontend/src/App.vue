<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue';
</script>

<template>
  <div class="entryAnimation">

  </div>
  <div class="wrapper">
    <div class="introTextWrap absolute flex flex-row gap-[10px]">
      <h1 class="introText1 nameCardTitle text-5xl">Anthony J. Chen's</h1>
      <h1 class="introText2 nameCardTitle text-5xl">Portfolio</h1>
    </div>
    <div id="navbar" class="fadeIn flex justify-center">
      <Navbar />
    </div>
    <div id="routerContent" class="fadeIn">
      <!-- maybe make router load routerview like after the navbar animation done -->
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

.routerView {
  display:flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.navbarWrapper {
  display:flex;
  justify-content: center;
}

.wrapper {
  display:flex;
  flex-direction: column;
}
</style>
