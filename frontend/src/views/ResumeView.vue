<script setup>
import resume from '../assets/resume.pdf'
import pdfjsDist from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/+esm'

</script>
<template>
<div class="resume">
    <div class="flex justify-center mt-[50px]">
        <iframe id="pdf-js-viewer" :src="resume" title="webviewer" frameborder="0" width="700" style="height:80vh"></iframe>
    </div>
</div>
</template>

<style>
</style>
    