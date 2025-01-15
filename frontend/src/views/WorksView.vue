<script setup>
import Sidebar from '../components/worksSidebar.vue'
import { RouterView } from 'vue-router';
</script>
<template>
<div class="works flex flex-row gap-[150px]">
    <Sidebar class="ml-[120px]"/>
    <RouterView />
</div>
</template>

<style>
</style>
  