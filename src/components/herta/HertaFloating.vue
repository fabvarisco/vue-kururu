<script setup lang="ts">
const y = Math.random() * window.innerHeight + "px";

</script>

<template>
        <img src="../../assets/herta-stuff/herta.gif" alt="KURURING!" class="kururu-rotation-image" />
</template>



<style scoped>


.kururu-rotation-image {
    position: absolute;
    top: v-bind(y);
    width: 100px;
    animation: rotation 5s infinite;

}

@keyframes moveImage {
    0% {
        left: 0;
    }

    100% {
        left: 100vw;
    }
}

@keyframes rotation {
    0% {
        transform: translate(0, 0) rotate(0deg);
        left: -100px;
    }

    100% {
        transform: translate(-1rem, -5rem) rotate(359deg);
        left: 150vw
    }
}
</style>
