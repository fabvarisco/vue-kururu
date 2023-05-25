<script setup lang="ts">
import { onMounted, ref } from 'vue';

const size = ref<string>("");
const position = ref<{ x: string, y: string }>({ x: "", y: "" });


onMounted(() => {
    size.value = Math.random() * 200 + "px";
    position.value.x = Math.random() * window.innerHeight + "px";
    position.value.x = Math.random() * window.innerWidth + "px";
})

</script>

<template>
    <span><img src="../assets/herta stuff/herta.gif" alt="KURURING!" class="kururu-spining" /></span>
</template>



<style scoped>
.kururu-spining {
    pointer-events: none;
    position: absolute;
    width: v-bind('size');
    height: v-bind('size');
    top: v-bind('position.y');
    left: v-bind('position.x');

}
</style>
