<script setup lang="ts">
const maxX = Math.random() * window.innerWidth;
const maxY = Math.random() * window.innerHeight;
const x = maxX + "px";
const y = maxY + "px";

</script>

<template>
    <div class="herta-screen-x">
        <img src="../../assets/herta-stuff/herta.png" class="herta-screen-y" />
    </div>
</template>

<style scoped>
img {
    width: 80px;
    height: 80px;
}

.herta-screen-x {
    position: absolute;
    animation: herta-screen-x 20s linear infinite ;
}

.herta-screen-y {
    animation: herta-screen-y 20s linear infinite ;
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
