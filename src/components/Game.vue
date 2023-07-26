<script setup lang="ts">
import uuid4 from 'uuid4';
import Herta from './Herta.vue';
import Shop from './Shop.vue';
import KururuMusic from './KururuMusic.vue';
import HertaSpining from './HertaSpining.vue';
import Enemy from './Enemy.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import FloatingText from "./FloatingText.vue";
import Phone from './Phone.vue';
import Map from './Map.vue';
import HertaFloating from './HertaFloating.vue';


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
const showFloatingText = ref<boolean>(false)

//Inventory 
const hammer = ref<number>(0)
const herta = ref<number>(0)
const hertaList = ref<IHertaComponent[]>([])


let coinsInterval: any = 0;

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
function floatTextReset(): void {
  showFloatingText.value = false;
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

function kururing(): void {
  kururuCoins.value++
  hertaAttack.value = true
  shaking.value = true
  showFloatingText.value = true
  createHerta()

}

onMounted(() => {
  coinsInterval = setInterval(() => {
    kururuCoins.value += cps.value;
  }, 1000);
})

onUnmounted(() => clearInterval(coinsInterval))

</script>

<template>
  <main class="kururu-game">
    <div class="kurukuru-count">
        <h1>Kururu Count: {{ kururuCoins }} </h1>
        <div style="display: flex; justify-content: center; font-size: 28px;">
          <h6 style="padding:16px">KPS: {{ cps }} </h6>
        </div>
      </div>
      
    <section class="kururu-container" style="border: solid 1px;" >
      <button @click="kururing()" style="all:unset; cursor: pointer;">
        <FloatingText :value="showFloatingText" @floatTextReset="floatTextReset"/>
        <Herta :value="hertaAttack" @hertaReset="hertaReset" />
      </button>
    </section>
    <section class="kururu-container ">
      <Shop />
    </section>
  </main>
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
