<script setup lang="ts">
import { ref, watch } from 'vue'
import Game from './views/Game.vue'

const STORAGE_KEY = 'kururidle-player'

function defaultPlayer(): IPlayer {
  return {
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
  }
}

function loadPlayer(): IPlayer {
  const saved = localStorage.getItem(STORAGE_KEY)
  const base = defaultPlayer()
  if (!saved) return base
  try {
    const parsed = JSON.parse(saved)
    // merge sobre os defaults para saves antigos não quebrarem com itens novos
    return { ...base, ...parsed, shopItems: { ...base.shopItems, ...parsed.shopItems } }
  } catch {
    return base
  }
}

const player = ref<IPlayer>(loadPlayer())

watch(
  player,
  (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
  { deep: true }
)

</script>

<template>
  <main>
    <Game  :player="player" />
  </main>
</template>

<style scoped></style>
