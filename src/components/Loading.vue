<script setup lang="ts">


</script>

<template>
    <div class="kururu-loading-container">
        <img src="../assets/herta-stuff/herta.gif" alt="Loading kururu" class="kururu-loading-img" />
        <h1 class="loading">Loading</h1>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

.kururu-loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.kururu-loading-img {
    width: 300px;
}


.loading:after {
  content: '.';
  animation: dots 2s steps(15, end) infinite;}

@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}}
</style>
