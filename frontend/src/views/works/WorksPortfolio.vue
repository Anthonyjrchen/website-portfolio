<script setup>
import portfolio from '../../components/media/portfolioSnapshot.png'
import { Separator } from 'radix-vue';
import { Icon } from '@iconify/vue'
import Footer from '@/components/Footer.vue';

function startAppear() {
    document.getElementById('vscSeparator').classList.remove('disappearSideway');
    document.getElementById('vscSeparator').classList.add('appearSideway');
}

function startDisappear() {
    document.getElementById('vscSeparator').classList.remove('appearSideway');
    document.getElementById('vscSeparator').classList.add('disappearSideway');
}

</script>
<template>
    <div class="portfolioWrap flex flex-col items-center justify-center">
        <img :src="portfolio" width="1200" class="shadow-sidebar-gray shadow-sm">
        <div class="text-5xl nameCardTitle mt-[50px] w-[1200px] text-light-teal">
            Portfolio page
        </div>
        <Separator class="worksSeparator mt-[15px]"/>
        <div class="infoSection flex flex-row w-[1200px]">
            <table class="mt-[20px]">
                <tbody>
                    <tr class="h-[80px]">
                        <td class="nameCardTitle text-2xl text-light-teal pr-[50px] align-top">Category</td>
                        <td class="text-xl align-top">
                            <h1>Web Development</h1>
                            <h1>Front-End</h1>
                        </td>
                    </tr>
                    <tr class=""> 
                        <td class="nameCardTitle text-2xl text-light-teal align-top">Year</td>
                        <td class="text-xl align-top">
                            <h1>2025</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="description flex flex-col gap-[10px] w-[500px] ml-auto mt-[20px]">
                <p class="text-xl">
                    My portfolio is a front-end website built mainly using Vue.JS.
                    The aim of this project was do demonstrate a simplistic design with subtle
                    animations. I will be updating this portfolio as my skillset and background 
                    improves.
                </p>
                <a class="flex flex-col w-[185px] items-center justify-center" href="https://github.com/Anthonyjrchen/website-portfolio" target="/blank" @mouseenter="startAppear()" @mouseleave="startDisappear()" >
                    <div class="flex flex-row gap-[2px] text-xl">
                        <Icon icon="ix:arrow-diagonal-top-right" width="30"/>
                        <p>Visit source code</p>
                    </div>
                    <Separator id="vscSeparator" class="visitSourceCode w-[187px] opacity-0"/>
                </a>
            </div>
        </div>
        <Footer class="mt-[50px]"/>
    </div>
</template>