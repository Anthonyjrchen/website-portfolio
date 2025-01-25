<script setup>
import anniversary from '../../components/media/anniversarySnapshot.png'
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
        <img :src="anniversary" class="shadow-sidebar-gray shadow-sm w-[70vw] rounded-[50px]">
        <div class="text-5xl nameCardTitle mt-[50px] w-[70vw] text-light-teal">
            Anniversary Timeline
        </div>
        <Separator class="worksSeparator mt-[15px]"/>
        <div class="infoSection flex flex-row w-[70vw]">
            <table class="mt-[20px]">
                <tbody>
                    <tr class="h-[80px]">
                        <td class="nameCardTitle text-2xl text-light-teal pr-[50px] align-top">Category</td>
                        <td class="text-xl align-top">
                            <h1>Front-End</h1>
                            <h1>Personal Website</h1>
                        </td>
                    </tr>
                    <tr class="h-[50px]"> 
                        <td class="nameCardTitle text-2xl text-light-teal align-top">Year</td>
                        <td class="text-xl align-top">
                            <h1>2024</h1>
                        </td>
                    </tr>
                    <tr class=""> 
                        <td class="nameCardTitle text-2xl text-light-teal align-top">Tech Stack</td>
                        <td class="text-xl align-top">
                            <h1>Vue.JS</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="description flex flex-col gap-[10px] w-[600px] ml-auto mt-[20px]">
                <p class="text-xl">
                    For my 3 year anniversary with my girlfriend, I created a website timeline to commemorate
                    our memories together. The anniversary timeline starts with a greeting page, then walks through
                    the years we had together, celebrating key moments. I wanted to include this project to show that I
                    enjoy using my programming knowledge for not just professional requirements.
                </p>
                <a class="flex flex-col w-[185px] items-center justify-center" href="https://github.com/Anthonyjrchen/Anniversary-Plan-Website" target="/blank" @mouseenter="startAppear()" @mouseleave="startDisappear()" >
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