<script setup lang="ts">

</script>

<template>
    <img src="../../assets/herta-stuff/herta.gif" alt="KURURING!" class="giant-kururu" />
</template>

<style scoped>

.giant-kururu {
    position: absolute;
    z-index: 10000;
    animation: moveImage 10s infinite;
    left: 0;
    height:100vh;
}

@keyframes moveImage {
    0% {
        transform: translate(-100vw,0);
    }

    100% {
        transform: translate(200vw,0);
    }
}
</style>
