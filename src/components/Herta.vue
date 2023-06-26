<script setup lang="ts">
import { ref, watchEffect, defineProps, watch } from 'vue';

const timeout = ref<any>(0)

const props = defineProps({
  value: { type: Boolean, required: true, default: false },
})

const spining = ref<boolean>(props.value);

const emit = defineEmits(['hertaReset'])


function HertaSpining() {
    const hertaPng: HTMLElement | null = document.getElementById('herta-png')
    const hertaGif: HTMLElement | null = document.getElementById('herta-gif')

    if (spining) {
        hertaPng?.classList.add("herta-none");

        hertaGif?.classList.remove("herta-none");
        hertaGif?.classList.add("herta-block");

        if (!timeout.value) {
            timeout.value = setTimeout(() => {
                hertaGif?.classList.add("herta-none");
                hertaGif?.classList.remove("herta-block");
                hertaPng?.classList.remove("herta-none");
                hertaPng?.classList.add("herta-block");
            }, 1000)
        } else {
            clearTimeout(timeout.value);
            timeout.value = setTimeout(() => {
                hertaGif?.classList.add("herta-none");
                hertaGif?.classList.remove("herta-block");
                hertaPng?.classList.remove("herta-none");
                hertaPng?.classList.add("herta-block");
            }, 1000)
        }
        spining.value = false;
        emit('hertaReset')
        
    }
}


watch(
  () => props.value,
  () => {
    HertaSpining()
  }
)
</script>

<template>
    <div class="herta-container">
        <img src="../assets/herta stuff/herta.gif" alt="KURURING!" class="herta-position herta-gif herta-none"
            id="herta-gif" />
        <img src="../assets/herta stuff/herta.png" alt="KURURING!" class="herta-position herta-png herta-block"
            id="herta-png" />
    </div>
</template>

<style scoped>
.herta-button {
    all: unset;
}

.herta-container {
    position: fixed;
    top: 63%;
    left: 45%;
    transform: translate(-50%, -50%);
    scale: .6;
}

.herta-position {
    object-fit: contain;
}

.herta-gif {
    transform: translate(-50%, -60%);
}

.herta-png {
    transform: translate(-50%, -50%);
}

.herta-block {
    display: block;
}

.herta-none {
    display: none;
}
</style>
