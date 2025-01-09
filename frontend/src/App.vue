<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="wrapper">
    <div class="navbarWrapper">
      <Navbar />
    </div>
    <div class="routerView">
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
