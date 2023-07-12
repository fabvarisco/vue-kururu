<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';


const props = defineProps({
    id: { type: String, required: true, default: false },
})


const emit = defineEmits<{
  (e: 'removeText', id: string): void
}>()

onMounted(()=>{
  const el = document.getElementById(props.id);
  console.log(props.id)
 setTimeout(()=>{
   el?.classList.add("floating-text-display");
  //  console.log(el)
  //   emit("removeText", props.id);
  //   console.log("tees")
  },900)
  emit("removeText", props.id);
})

onUnmounted(()=>{

})
</script>

<template>
  <span :id="props.id" class="floating-text">Hello, World!</span>
</template>

<style scoped>


.floating-text {
  position: absolute;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  animation: floatAnimation 1s linear;
}


.floating-text-display {
  display: none;
}
@keyframes floatAnimation {
  0% {
    opacity: 1;
    transform: translateY(-50%);
  }
  100% {
    opacity: 0;
    transform: translateY(-600%);
  }
}

</style>
