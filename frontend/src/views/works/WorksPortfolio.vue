<script setup>
import portfolio from '../../components/media/portfolioSnapshot.png'
</script>
<template>
    <div class="portfolioWrap flex flex-col items-center justify-center">
        <img :src="portfolio" width="1500" class="shadow-sidebar-gray shadow-sm">
        <div class="text-4xl nameCardTitle">
            Portfolio page
        </div>
    </div>
</template>