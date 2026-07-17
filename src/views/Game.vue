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

interface Props {
  player: IPlayer
}

const props = defineProps<Props>();
const player = reactive<IPlayer>(props.player);
const hertaAttack = ref<boolean>(false);
const shaking = ref<boolean>(false);
const showFloatingText = ref<boolean>(false);


const hertaList = ref<any[]>([])

let coinsInterval: any = 0;

function levelUpItem(item: Item) {
  item.level++;
  player.cps += item.cps;
  item.price = Math.ceil(item.price * 1.15);
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



onMounted(() => {
  coinsInterval = setInterval(() => {
    player.coins += player.cps;
  }, 1000);
})

onUnmounted(() => clearInterval(coinsInterval))

</script>

<template>
  <section class="kururu-game">
    <div class="herta-stage">
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
</template>


<style scoped>
.kururu-game {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
}

.herta-stage {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
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

/* Mobile portrait: game + shop share one screen, no page scroll */
@media (max-width: 768px) and (orientation: portrait) {
  .kururu-game {
    grid-template-columns: 1fr;
    /* minmax(0, ...) lets the game row shrink below the click button's
       layout size (the Herta img is full-size, only visually scaled down) */
    grid-template-rows: minmax(0, 1fr) auto;
    height: 100vh;
    height: 100svh;
    width: 100%;
    overflow: hidden;
  }

  .kururu-container {
    padding: 8px;
    min-height: 0;
    overflow: hidden;
  }

  .kurukuru-count {
    left: 50%;
    top: 2%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 90vw;
  }

  .kurukuru-count h1 {
    font-size: 1.3rem;
  }
}

/* Mobile landscape: full-screen game, scroll down to reach the shop */
@media (orientation: landscape) and (max-height: 500px) {
  .kururu-game {
    grid-template-columns: 1fr;
    grid-template-rows: 100vh auto;
    grid-template-rows: 100svh auto;
    height: auto;
    width: 100%;
  }

  .kururu-container {
    min-height: 0;
    overflow: hidden;
  }

  .kurukuru-count {
    left: 50%;
    top: 5%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 90vw;
  }
}
</style>
