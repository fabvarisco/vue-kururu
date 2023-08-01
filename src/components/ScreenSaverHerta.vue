<script setup lang="ts">
import { ref } from 'vue';

const maxX = Math.random() * 1000;
const maxY = Math.random() * 1000;
const x = "600px";
const y = 600;

console.log(x, y)
</script>

<template>
    <div class="herta-screen-x ">
        <img src="../assets/herta-stuff/herta.png" class="herta-screen-y" />
    </div>
</template>

<style scoped>
img {
    width: 80px;
    height: 80px;
}

.herta-screen-x {
    position: absolute;
    animation: herta-screen-x 20s linear infinite alternate;
}

.herta-screen-y {
    animation: herta-screen-y 20s linear infinite alternate;
}


@keyframes herta-screen-x {
    100% {
        transform: translateX(v-bind(x));
    }
}

@keyframes herta-screen-y {
    100% {
        transform: translateY(calc(100vh - v-bind(y)));
    }
}
</style>
