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
    transform: translate(100%,50%);
}

@keyframes moveImage {
    0% {
        transform: translate(-100vw,50%);
    }

    100% {
        transform: translate(100vw,50%);
    }
}
</style>
