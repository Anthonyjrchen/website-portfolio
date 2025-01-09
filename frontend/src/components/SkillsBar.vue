<script setup>
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import { onMounted, ref } from 'vue'
const progressValue1 = ref(0)
const progressValue2 = ref(0)
const progressValue3 = ref(0)
const progressValue4 = ref(0)
const progressValue5 = ref(0)
const progressValue6 = ref(0)

onMounted(() => {
  const timer = setTimeout(() => (setProgress()), 500)
  return () => clearTimeout(timer)
})

function setProgress() {
    progressValue1.value = 95
    progressValue2.value = 90
    progressValue3.value = 75
    progressValue4.value = 60
    progressValue5.value = 85
    progressValue6.value = 70
}
</script>

<template>
    <div class="flex flex-col">
        <h1 class="nameCardTitle text-4xl mb-[50px]">Skills</h1>
        <div class="skillWrap">
            <h1>Python</h1>
            <ProgressRoot
                v-model="progressValue1"
                class="ProgressRoot"
                style="transform: translateZ(0)"
            >
                <ProgressIndicator
                class="ProgressIndicator"
                :style="`transform: translateX(-${100 - progressValue1}%)`"
                />
            </ProgressRoot>
        </div>
        <div class="skillWrap">
            <h1>VueJS</h1>
            <ProgressRoot
                v-model="progressValue2"
                class="ProgressRoot"
                style="transform: translateZ(0)"
            >
                <ProgressIndicator
                class="ProgressIndicator"
                :style="`transform: translateX(-${100 - progressValue2}%)`"
                />
            </ProgressRoot>
        </div>
        <div class="skillWrap">
            <h1>FastAPI</h1>
            <ProgressRoot
                v-model="progressValue3"
                class="ProgressRoot"
                style="transform: translateZ(0)"
            >
                <ProgressIndicator
                class="ProgressIndicator"
                :style="`transform: translateX(-${100 - progressValue3}%)`"
                />
            </ProgressRoot>
        </div>
        <div class="skillWrap">
            <h1>SQLite</h1>
            <ProgressRoot
                v-model="progressValue4"
                class="ProgressRoot"
                style="transform: translateZ(0)"
            >
                <ProgressIndicator
                class="ProgressIndicator"
                :style="`transform: translateX(-${100 - progressValue4}%)`"
                />
            </ProgressRoot>
        </div>
        <div class="skillWrap">
            <h1>CI/CD</h1>
            <ProgressRoot
                v-model="progressValue5"
                class="ProgressRoot"
                style="transform: translateZ(0)"
            >
                <ProgressIndicator
                class="ProgressIndicator"
                :style="`transform: translateX(-${100 - progressValue5}%)`"
                />
            </ProgressRoot>
        </div>
        <div class="skillWrap">
            <h1>UI/UX Design</h1>
            <ProgressRoot
                v-model="progressValue6"
                class="ProgressRoot"
                style="transform: translateZ(0)"
            >
                <ProgressIndicator
                class="ProgressIndicator"
                :style="`transform: translateX(-${100 - progressValue6}%)`"
                />
            </ProgressRoot>
        </div>
    </div>
</template>
<style scoped>
.ProgressRoot {
  position: relative;
  overflow: hidden;
  background: #418071;
  border-radius: 99999px;
  width: 300px;
  height: 25px;

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
}

.ProgressIndicator {
  background-color: white;
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
}
</style>