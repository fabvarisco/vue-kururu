<script setup lang="ts">
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<template>
<div id="floating-text-container">
  <span id="floating-text">Hello, World!</span>
</div>
</template>

<style scoped>


#floating-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  animation: floatAnimation 1s infinite;
}

@keyframes floatAnimation {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(-300%);
  }
}

</style>
