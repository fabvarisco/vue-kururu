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
    width: 100%;
    height: 50%;
}

.kururu-image {
    position: absolute;
    top: 50%;
    left: 50%;
    top: 10%;
    height: v-bind('size');
    transform: translate(-50%, -50%);
    animation: moveImage 3s linear ;
}

.kururu-translate-image {
    position: absolute;
    top: 50%;
    left: 50%;
    top: 10%;
    height: v-bind('size');
    transform: translate(-50%, -50%);
    animation: moveImage 3s linear ;
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
        left: calc(100% - 100px);
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
