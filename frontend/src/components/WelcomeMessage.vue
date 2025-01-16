<script setup>
setTimeout(()=>{
  document.getElementById("welcomeText").classList.add("slide-in-left");
},500)
</script>
<template>
  <div class="messageWrap">
    <div id="welcomeText" class="welcomeText flex flex-col gap-[30px] items-center">
        <h1 class="font-semibold text-3xl">Hi, I'm Anthony. Nice to meet you.</h1>
        <p class="text-xl w-[700px] text-center">Since I started programming 5 years ago, I've completed many
            projects, partook in many events such as CTFs, a game development 
            competition, and more. So far, I've completed two client request projects: DAhandler, and 
            a secured data trading platform. Feel free to explore these in my works section!
        </p>
    </div>
  </div>
</template>