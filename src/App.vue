<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { supabase } from './supabase'
import Game from './views/Game.vue';
import Home from './views/Home.vue';

const session = ref()
const player = ref<IPlayer>({
  username: "",
  coins: 0,
  cps: 0,
  dps: 0,
  idps: "",
  shopItems: {
    spiningHerta: {
      cps: 1, level: 0, name: 'Spining Herta', price: 10
    },
    giantHerta: {
      cps: 1, level: 0, name: 'Giant Herta', price: 10
    },
    floatingHerta: {
      cps: 1, level: 0, name: 'Floating Herta', price: 10
    },
    screenSaverHerta: {
      cps: 1, level: 0, name: 'Screen Saver Herta', price: 10
    },
  },
  upgrades: {},
  skills: {}
})

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})


const isLogged = ref<boolean>(false);

// const player: IPlayer = {
//   username: "",
//   coins: 0,
//   cps: 0,
//   dps: 0,
//   idps: "",
//   shopItems: {
//     spiningHerta: {
//       cps: 1, level: 0, name: 'Spining Herta', price: 10
//     },
//     giantHerta: {
//       cps: 1, level: 0, name: 'Giant Herta', price: 10
//     },
//     floatingHerta: {
//       cps: 1, level: 0, name: 'Floating Herta', price: 10
//     },
//     screenSaverHerta: {
//       cps: 1, level: 0, name: 'Screen Saver Herta', price: 10
//     },
//   },
//   upgrades: {},
//   skills: {}
// }

</script>

<template>
  <main>
    <Game v-if="session" :session="session" :player="player" />
    <Home v-else />
    <!-- <Game :player="player" /> -->
  </main>
</template>


<style scoped></style>
