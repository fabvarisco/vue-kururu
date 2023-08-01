<script setup lang="ts">

</script>

<template>
    <img src="../assets/herta-stuff/herta.gif" alt="KURURING!" class="giant-kururu" />
</template>

<style scoped>

.giant-kururu {
    position: absolute;
    z-index: 10000;
    bottom: 0;
    animation: moveImage 10s infinite;
    transform: translate(-100%,0);
}

@keyframes moveImage {
    0% {
        left: 0;
    }

    100% {
        left: 200%;
    }
}
</style>
