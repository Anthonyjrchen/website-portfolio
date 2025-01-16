<script setup>
import { Separator } from 'radix-vue';
</script>

<template>
    <h1 class="nameCardTitle text-4xl mb-[50px]">My Experience</h1>
    <div class="experienceCard">
        <div class="infoSection">
            <div>
                <h1 class="font-semibold">Jun 2023 - Aug 2023</h1>
                <Separator class="infoSectionSeperator" />
                <div class="flex items-center flex-row">
                    <p class="nameCardTitle text-s font-semibold">ASTRI</p>
                    <h1 class="text-s ml-auto italic">Hong Kong</h1>
                </div>
            </div>
        </div>
        <div class="textSection">
            <h1 class="nameCardTitle text-xl">Software Engineering Intern</h1>
            <p class="w-[600px]">I worked in the Advanced Crypto Systems Division of ASTRI,
                 where I was tasked with developing a web application that functions as a 
                 secured data trading platform. My internship at ASTRI was my first experience
                  developing a scalable web application for a real client with specific 
                  product requirements. I faced numerous challenges, particularly with
                   navigating a tech stack that was entirely new to me. However, I persevered,
                    overcame these obstacles, and emerged stronger as a developer. I am deeply
                     grateful to everyone at ASTRI for their guidance and support, which 
                     helped me grow both personally and professionally.
            </p>
        </div>
    </div>
    <div class="experienceCard">
        <div class="infoSection">
            <div>
                <h1 class="font-semibold">Sep 2020 - May 2025</h1>
                <Separator class="infoSectionSeperator" />
                <div class="flex items-center flex-row">
                    <p class="nameCardTitle text-s font-semibold">UBC</p>
                    <h1 class="text-s ml-auto italic">Vancouver, BC</h1>
                </div>
            </div>
        </div>
        <div class="textSection">
            <h1 class="nameCardTitle text-xl">Bachelor Degree in Cogntive Systems</h1>
            <p class="w-[600px]">For clarification, Cognitive Systems is an interdisciplinary
                 major that combines computer science, psychology, and philosophy. While the 
                 program primarily focuses on artificial intelligence, I developed an 
                 appreciation for and a desire to work in full-stack web development. During my
                  time at UBC, I explored various computer science disciplines, including AI, 
                  cybersecurity, computer networking, and full-stack web development. Through 
                  completing numerous projects and an internship, my passion for web 
                  development grew significantly. I believe my greatest takeaway from UBC is
                  the ability to continuously learn and adapt to unfamiliar environments.
            </p>
        </div>
    </div>
</template>