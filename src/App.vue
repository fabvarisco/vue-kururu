<script setup lang="ts">
import { ref } from 'vue';
import Game from './components/Game.vue';
import Home from './components/Home.vue';


const isLogged = ref<boolean>(false);
</script>

<template>
  <main>
      <Home v-if="!isLogged" />
      <Game v-if="isLogged" />
  </main>
</template>


<style scoped>

</style>
