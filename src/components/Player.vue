<script setup lang="ts">
import { reactive } from 'vue';

const player = reactive<IPlayer>({
  username: "",
  coins: 0,
  cps: 0,
  dps: 0,
  idps: "",
  shopItens: {},
  upgrades: {},
  skills: {}
})

</script>

<template>
        <slot name="player" :player="player"></slot>
</template>
  

  
<style></style>