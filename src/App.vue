<script setup lang="ts">
import { ref } from 'vue'
import Game from './views/Game.vue'

const player = ref<IPlayer>({
  username: '',
  coins: 0,
  cps: 0,
  dps: 0,
  idps: '',
  shopItems: {
    spiningHerta: {
      cps: 1,
      level: 0,
      name: 'Spining Herta',
      price: 15
    },
    floatingHerta: {
      cps: 5,
      level: 0,
      name: 'Floating Herta',
      price: 100
    },
    screenSaverHerta: {
      cps: 20,
      level: 0,
      name: 'Screen Saver Herta',
      price: 700
    },
    giantHerta: {
      cps: 80,
      level: 0,
      name: 'Giant Herta',
      price: 4000
    }
  },
})

</script>

<template>
  <main>
    <Game  :player="player" />
  </main>
</template>

<style scoped></style>
