<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    value: { type: Boolean, required: true, default: false },
})

const shaking = ref<boolean>(props.value);
const timeout = ref<any>(0);

const emit = defineEmits(['shakeReset'])

function Shake() {
    const enemy: HTMLElement | null = document.getElementById('enemy-id')

    if (shaking) {
        enemy?.classList.add("shaking");
        if (!timeout) {
            timeout.value = setTimeout(() => {
                enemy?.classList.remove("shaking");
            }, 1000)
        } else {
            clearTimeout(timeout.value);
            timeout.value = setTimeout(() => {
                enemy?.classList.remove("shaking");
            }, 1000)
        }
        
        shaking.value = false;
        emit('shakeReset');
    }
}

watch(
    () => props.value,
    () => {
        Shake()
    }
)

</script>

<template>
    <div class="enemy-container">
        <img src="../assets/enemies/enemy_example.png" alt="ENEMY" class="enemy-position" id="enemy-id" />
    </div>
</template>

<style scoped>
.enemy-container {
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translateY(-50%);
    scale: 1;
}

.shaking {
    animation: shake 0.5s infinite;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }

    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }

    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }

    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }

    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }

    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }

    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }

    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }

    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }

    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }

    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}
</style>
