<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(['floatTextReset'])
const props = defineProps({
  value: { type: Boolean, required: true, default: false },
})

const clickText = ref<string>(Math.random() < 0.5 ? "~Kururing" : "~Kururu")

function RandomText(){
  clickText.value = Math.random() < 0.5 ? "~Kururing" : "~Kururu";
}
 
function removeFloatingText() {
  RandomText();
  emit('floatTextReset')
};

</script>

<template>
  <div class="floating-text" v-if="props.value" @animationend="removeFloatingText" >  {{ clickText }} </div>
</template>

<style scoped>
.floating-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: #392a64;
  font-weight: bold;
  -webkit-text-fill-color: #392a64;
  /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  animation: floatText 2s linear;
  z-index: 100;
}

@keyframes floatText {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -200%);
  }
}
</style>
