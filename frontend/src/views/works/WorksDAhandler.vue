<script setup>
import DAhandler from '../../components/media/DAhandlerSnapshot.png'
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
        <img :src="DAhandler" class="shadow-sidebar-gray shadow-sm w-[70vw] rounded-[50px]">
        <div class="text-5xl nameCardTitle mt-[50px] w-[70vw] text-light-teal">
            DAhandler (Outlook Event Handler)
        </div>
        <Separator class="worksSeparator mt-[15px]"/>
        <div class="infoSection flex flex-row w-[70vw]">
            <table class="mt-[20px]">
                <tbody>
                    <tr class="h-[110px]">
                        <td class="nameCardTitle text-2xl text-light-teal pr-[50px] align-top">Category</td>
                        <td class="text-xl align-top">
                            <h1>Web Development</h1>
                            <h1>Full-Stack</h1>
                            <h1>Client Requirement</h1>
                        </td>
                    </tr>
                    <tr class="h-[50px]"> 
                        <td class="nameCardTitle text-2xl text-light-teal align-top">Year</td>
                        <td class="text-xl align-top">
                            <h1>2025</h1>
                        </td>
                    </tr>
                    <tr class=""> 
                        <td class="nameCardTitle text-2xl text-light-teal align-top">Client</td>
                        <td class="text-xl align-top">
                            <h1>Jenkins Marzban Logan LLP</h1>
                        </td>
                    </tr>
                    <tr class=""> 
                        <td class="nameCardTitle text-2xl text-light-teal align-top">Tech Stack</td>
                        <td class="text-xl align-top">
                            <h1>Vue.JS and FastAPI</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="description flex flex-col gap-[10px] w-[600px] ml-auto mt-[20px]">
                <p class="text-xl">
                    DAhandler is was developed for the use of a Jana Neria, a paralegal at JML. Part of
                    the client's job involved scheduling 64 due dates and reminders for every trial for every lawyer.
                    Completing this process manually can take hours for each lawyer. With the DAhandler,
                    the user is able to automatically add/delete the selected events/reminders to any number of lawyers
                    and paralegal's calendars. The user can also change the settings of the web app to for example, update holidays,
                    remove calendars, and more. 
                </p>
                <a class="flex flex-col w-[185px] items-center justify-center" href="https://github.com/Anthonyjrchen/ProjectDa" target="/blank" @mouseenter="startAppear()" @mouseleave="startDisappear()" >
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