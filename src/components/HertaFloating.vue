<script setup lang="ts">
defineProps<{
    size: string
}>()


</script>

<template>
    <div class="kururu-container">
        <img src="../assets/herta-stuff/herta.gif" alt="KURURING!" class="kururu-translate-image" />
    </div>
</template>



<style scoped>
.kururu-container {
    position: absolute;
    width: 100vw;
    height: 100%;
}

.kururu-image {
    position: absolute;
    top: 50%;
    left: 50%;
    top: 10%;
    height: v-bind('size');
    transform: translate(-50%, -50%);
    animation: moveImage 3s infinite ;
}

.kururu-translate-image {
    position: absolute;
    top: 50%;
    left: 50%;
    top: 10%;
    height: v-bind('size');
    transform: translate(-50%, -50%);
    animation: moveImage 5s infinite ;
}

.kururu-rotation-image {
    position: absolute;
    top: 50%;
    left: 50%;
    top: 10%;
    height: v-bind('size');
    transform: translate(-50%, -50%);
    width: 100px;
    animation: rotation 3s  linear;

}

@keyframes moveImage {
    0% {
        left: 0;
    }

    100% {
        left: 110vw;
    }
}

@keyframes rotation {
    0% {
        transform: translate(0, 0) rotate(0deg);
        left: 0;
    }

    100% {
        transform: translate(-1rem, -5rem) rotate(359deg);
        left: calc(90% - 100px);
    }
}
</style>
