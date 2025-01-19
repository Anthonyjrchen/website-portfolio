<script setup>
import resume from '../assets/resume.pdf'
import pdfjsDist from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/+esm'
import Footer from '../components/Footer.vue'
</script>
<template>
<div class="resume">
    <div class="flex justify-center mt-[50px]">
        <iframe id="pdf-js-viewer" :src="resume" title="webviewer" frameborder="0" width="700" style="height:80vh"></iframe>
    </div>
    <Footer class="mt-[50px]"/>
</div>
</template>

<style>
</style>
    