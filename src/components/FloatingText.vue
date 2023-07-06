<script setup lang="ts">
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const value:string = document?.getElementById('floating-text')?.style?.color = getRandomColor();

</script>

<template>
<div id="floating-text-container">
  <span id="floating-text">Hello, World!</span>
</div>
</template>

<style scoped>
#floating-text-container {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid black;
  overflow: hidden;
}

#floating-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: floatAnimation 5s infinite;
}

@keyframes floatAnimation {
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -150%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

</style>
