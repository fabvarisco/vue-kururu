<script setup lang="ts">
import {onMounted, ref } from 'vue';
import { supabase } from './supabase'
import Game from './components/Game.vue';
import Home from './components/Home.vue';

const session = ref()

// onMounted(() => {
//   supabase.auth.getSession().then(({ data }) => {
//     session.value = data.session
//   })

//   supabase.auth.onAuthStateChange((_, _session) => {
//     session.value = _session
//   })
// })


const isLogged = ref<boolean>(false);


const player = {
  username: "",
  coins: 0,
  cps: "",
  dps: "",
  idps: "",
  shopItens: {},
  upgrades: {},
  skills: {}
}

</script>

<template>
  <main>
    <!-- <Game v-if="session" :session="session" />
    <Home v-else /> -->
    <Home />
  </main>
</template>


<style scoped></style>
