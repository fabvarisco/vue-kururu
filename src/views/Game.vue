<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import Herta from '../components/herta/Herta.vue';
import Shop from '../components/shop/Shop.vue';
import KururuMusic from '../components/utils/KururuMusic.vue';
import HertaSpining from '../components/herta/HertaSpining.vue';
import GiantHerta from '../components/herta/GiantHerta.vue';
import FloatingText from "../components/utils/FloatingText.vue";
import ScreenSaverHerta from '../components/herta/ScreenSaverHerta.vue';
import HertaFloating from '../components/herta/HertaFloating.vue';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/supabase';
import Loading from '@/components/Loading.vue';

interface Props {
  player: IPlayer
  session: Session;
}

const props = defineProps<Props>();
const loading = ref<boolean>(false);
const player = reactive<IPlayer>(props.player);
const dps = ref<number>(1);
const hertaAttack = ref<boolean>(false);
const shaking = ref<boolean>(false);
const showFloatingText = ref<boolean>(false);

//Inventory 
const hammer = ref<number>(0)
const herta = ref<number>(0)

const hertaList = ref<any[]>([])

let coinsInterval: any = 0;

function levelUpItem(item: Item) {
  item.level++;
  player.cps += item.cps;
  item.cps *= item.level;
  item.price *= item.level;
}

function buyItem(itemKey: shopItemKey): void {
  const item = player.shopItems[itemKey];
  if (player.coins >= item.price) {
    player.coins -= item.price;
    levelUpItem(item);
  }
}

function hertaReset(): void {
  hertaAttack.value = false;
}

function floatTextReset(): void {
  showFloatingText.value = false;
}
function createHerta(): void {
  const newHerta: any = { id: "0", name: "kururu", size: 100, rotation: false };
  hertaList.value.push(newHerta);
  setTimeout(() => {
    const index = hertaList.value.findIndex(item => item.id === newHerta.id);
    if (index !== -1) {
      hertaList.value.splice(index, 1);
    }
  }, 3000);
}

function kururing(): void {
  player.coins++
  hertaAttack.value = true
  shaking.value = true
  showFloatingText.value = true
  createHerta()
}

async function getCurrentUser() {
  const localUser = await supabase.auth.getSession();
  console.log(localUser)
}


onMounted(() => {
  coinsInterval = setInterval(() => {
    player.coins += player.cps;
  }, 1000);
  getCurrentUser();
})

onUnmounted(() => clearInterval(coinsInterval))

</script>

<template>
  <section v-if="!loading" class="kururu-game">
    
    <div style="position: absolute;">
      <HertaSpining v-for="el in player.shopItems.spiningHerta.level" />
      <ScreenSaverHerta v-for="el in player.shopItems.screenSaverHerta.level" />
      <HertaFloating v-for="el in player.shopItems.floatingHerta.level" />
      <GiantHerta v-if="player.shopItems.giantHerta.level >= 1" />
    </div>
    <section class="kururu-container" style="border: solid 1px;">
      <div class="kurukuru-count">
        <h1>Kururu Coins: {{ player.coins }} </h1>
        <div style="display: flex; justify-content: center; font-size: 28px;">
          <h6 style="padding:16px">cps: {{ player.cps }} </h6>
        </div>
      </div>
      <button @click="kururing()" style="all: unset;">
        <FloatingText :value="showFloatingText" @floatTextReset="floatTextReset" />
        <Herta :value="hertaAttack" @hertaReset="hertaReset" />
      </button>
    </section>
    <section class="kururu-container ">
      <Shop @buyItem="buyItem" :playerShopItems="player.shopItems" />
    </section>
  </section>
  <section v-else>
    <Loading />
  </section>
</template>


<style scoped>
.kururu-game {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
}

.kururu-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.kururu-main {
  display: flex;
}

.kurukuru-count {
  position: absolute;
  color: white;
  text-align: center;
  left: 20%;
  top: 10%;

}

.kururin-button {
  background: #7b5cad;
  width: 200px;
  height: 48px;
  border: #392a64 solid 2px;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .kururu-game {
    grid-template-columns: 1fr;
  }
}
</style>
