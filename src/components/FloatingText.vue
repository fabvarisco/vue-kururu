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

 setTimeout(()=>{
   el?.classList.remove("floating-text");
   el?.classList.add("floating-text-display");
    emit("removeText", props.id);
    console.log("tees")
  },3000)
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
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  animation: floatAnimation 1s;
}


.floating-text-display {
  display: none;
}
@keyframes floatAnimation {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(-600%);
  }
}

</style>
