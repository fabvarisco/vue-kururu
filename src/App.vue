<script setup lang="ts">
import Herta from './components/Herta.vue';
import Shop from './components/Shop.vue';
import KururuMusic from './components/KururuMusic.vue';
import HertaSpining from './components/HertaSpining.vue';
import Enemy from './components/Enemy.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import FloatingText  from "./components/FloatingText.vue";

interface IHertaComponent {
  id: string;
  name: string;
  size: number;
  rotation: boolean;
}


const kururuCoins = ref<number>(0)
const cps = ref<number>(1)
const dps = ref<number>(1)
const hertaAttack = ref<boolean>(false)
const shaking = ref<boolean>(false)


//Inventory 
const hammer = ref<number>(0)
const herta = ref<number>(0)
const hertaList = ref<IHertaComponent[]>([])
const floatTextList = ref<number[]>([])

let coins = 0;

function buyItem(item: any): void {
  if (kururuCoins.value >= item.price) {
    kururuCoins.value -= item.price;
    switch (item.name) {
      case "Hammer":
        hammer.value++;
        cps.value += item.cps
        break;
      case "Herta":
        herta.value++;
        cps.value += item.cps
        break;

    }
  }
}

function hertaReset(): void {
  hertaAttack.value = false;
}
function shakeReset(): void {
  shaking.value = false;

}
function convertSizeToPx(size: number): string {
  return size + "px"
}

function createHerta(): void {
  const newHerta: IHertaComponent = { id: "0", name: "kururu", size: 100, rotation: false };
  hertaList.value.push(newHerta);
  setTimeout(() => {
    const index = hertaList.value.findIndex(item => item.id === newHerta.id);
    if (index !== -1) {
      hertaList.value.splice(index, 1);
    }
  }, 3000);
}

function createFloatingText(): void {
  const newHerta: IHertaComponent = { id: "0", name: "kururu", size: 100, rotation: false };
  hertaList.value.push(newHerta);
  setTimeout(() => {
    const index = hertaList.value.findIndex(item => item.id === newHerta.id);
    if (index !== -1) {
      hertaList.value.splice(index, 1);
    }
  }, 3000);
}

function kururing(): void {
  kururuCoins.value++
  hertaAttack.value = true
  shaking.value = true
  //createHerta()
}

onMounted(() => {
  coins = setInterval(() => {
    kururuCoins.value += cps.value;
  }, 1000);
})

onUnmounted(() => clearInterval(coins))

</script>

<template>
  <main>
    <!--Game Section-->
    <section class="game">
      <div class="kurukuru-coins">
        <p>Kururu Coins: {{ kururuCoins }} </p>
        <div style="display: flex; justify-content: center; font-size: 28px;">
          <p style="padding:16px">Cps: {{ cps }} </p>
          <p style="padding:16px">Idle Dps: {{ dps }} </p>
          <p style="padding:16px">Dps: {{ dps }} </p>
        </div>
      </div>


      <div v-for="text in floatTextList">
        <FloatingText :is="text" :key="text.name" />
      </div>

      <div @click="kururing()">
        <Enemy :value="shaking" @shakeReset="shakeReset" />
        <Herta :value="hertaAttack" @hertaReset="hertaReset"/>
      </div>

    </section>
    <!--Shop Section-->
    <section class="shop-container">
      <Shop @buyItem="buyItem" />
    </section>
  </main>
</template>


<style scoped>
.kurukuru-coins {
  color: white;
  text-align: center;
  font-size: 57px;
}

.shop-container {
  position: relative;
  z-index: 100;
  width: 100vw;
  height: 30vh;
  overflow: auto;
  ;
}

.game {
  background-image: url('./assets/backgrounds/bkg_example.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  width: 100vw;
}

.kururin-button {
  background: #7b5cad;
  width: 200px;
  height: 48px;
  border: #392a64 solid 2px;
}
</style>
