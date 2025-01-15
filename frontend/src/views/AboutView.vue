<script setup>
  import Carousel from '../components/MediaDisplay.vue'
  import aboutBackground from '../components/media/aboutBackground.jpg'
  import aboutInternship from '../components/media/astriACS.jpg'
  import Footer from '../components/Footer.vue'
  import { onMounted } from 'vue'

  
  onMounted(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-animation');
      }
    });
    });
    const targetElements = document.querySelectorAll('.aboutCard');
    console.log(targetElements)
    targetElements.forEach((element)=>observer.observe(element));

  });
  
</script>
<template>
  <div>
    <!-- <div class="circle"></div> -->
    <div class="about">
      <Carousel />
      <div class="aboutContent pt-[90px] pl-[120px] pr-[120px] flex flex-col gap-[100px]">
        <div class="aboutCard">
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
          <img :src="aboutBackground" class="ml-auto w-[600px] h-[420px] rounded-md shadow-random-gray shadow-sm z-30" />
        </div>
        <div class="aboutCard">
          <img :src="aboutInternship" class="w-[600px] h-[420px] rounded-md shadow-random-gray shadow-sm">
          <div class="flex flex-col ml-auto w-[600px]">
            <h1 class="nameCardTitle text-4xl">Internship</h1>
            <p class="text-xl mt-[10px]">As you can see from my resume, I completed an internship at Hong Kong's ASTRI. I was placed in the Advanced Crypto Division, where I worked with a team developing a secure data trading platform. While the team had professionals handling the cryptography aspect of the platform, they lacked a functional web platform.

I was tasked with using FastAPI and Kubernetes to host a web application that could integrate their scripts and systems. Although I had never undertaken a project like this before, I planned my approach systematically and created a small learning project using the required frameworks. After completing this project and gaining a better understanding of my tools, I developed a platform for users to sign up as buyers or sellers. These users could then buy or sell datasets from one another.

To enhance security, I implemented JWT authentication for token-based authorization. For more details about this project, please visit <a class="underline" target="blank" href="https://www.astri.org/rdprojects/trusted-data-framework-for-data-exchanges/">this website</a>.
            </p>
          </div>
        </div>
        <div class="aboutCard">
          <div class="flex flex-col w-[600px]">
            <h1 class="nameCardTitle text-4xl">Passions</h1>
            <p class="text-xl mt-[10px]">
              Volleyball has been my biggest passion for years. I started it when
              I was 12 and have been playing at competitive levels since. I have been 
              team captain for many teams, a coach for many teams, and a player for all.
              The people I have met from volleyball and the experiences and challenges 
              that I have overcome have shaped me as a person. I value team work, cooperation, 
              and improvement above all else. I find that I keep encountering new unseen challenges,
              but I accept the things I don't know and focus on adapting to new environments to improve.
            </p>
          </div>
          <img :src="aboutPassion" class="ml-auto w-[600px] h-[420px] rounded-md shadow-random-gray shadow-sm z-30" />
        </div>
      </div>
      <Footer class="mt-[40px]"/>
    </div>
  </div>
</template>

<style>
</style>
