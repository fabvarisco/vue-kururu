<template>
  <main>
    <!--Game Section-->

    <section class="game">
      <div>
        <p>Kururu Coins: {{ kururuCoins }} </p>
        <p>Cps: {{ cps }} </p>
      </div>

      <div>
        <Enemy @shake="kururing"/>
        <Herta @spining="kururing"/>
      </div>

    </section>
    <section class="shop-container">
      <Shop @buyItem="buyItem"/>
    </section>
    <!--Shop Section-->


    <!--     
    <div>
      <Herta v-for="kururu in hertaList" :key="kururu.id" :hertaSize="convertSizeToPx(kururu.size)"/>
    </div>
    <div>
      <button class="kururin-button" @click="kururing">KURURU</button>
    </div>
    <div>
      <Shop @buyItem="buyItem"/>
    </div>
    <div>
      <p>Kururu Coins: {{ kururuCoins }} </p>
      <p>Cps: {{ cps }} </p>
    </div> -->
  </main>
</template>

<script setup lang="ts">
import Herta from './components/Herta.vue';
import Shop from './components/Shop.vue';
import KururuMusic from './components/KururuMusic.vue';
import HertaSpining from './components/HertaSpining.vue';
import Enemy from './components/Enemy.vue';
</script>

<script lang="ts">
interface IHertaComponent {
  id: string;
  name: string;
  size: number;
  rotation: boolean;
}

export default {
  data() {
    return {
      hertaList: [] as IHertaComponent[],
      kururuCoins: 0,
      herta: 0,
      hammer: 0,
      cps: 0,
      emits: ['hertaEvent', 'hammerEvent']

    };
  },
  mounted() {
    this.startGame()
  },
  components: {
    Shop,
    HertaSpining,
    Enemy
  },
  methods: {
    startGame(): void {
      setInterval(() => {
        this.kururuCoins += this.cps;
      }, 1000);
    },
    createHerta(): void {
      const newHerta: IHertaComponent = { id: "0", name: "kururu", size: 100, rotation: false };
      this.hertaList.push(newHerta);
      setTimeout(() => {
        const index = this.hertaList.findIndex(item => item.id === newHerta.id);
        if (index !== -1) {
          this.hertaList.splice(index, 1);
        }
      }, 3000);
    },
    convertSizeToPx(size: number): string {
      return size + "px"
    },
    buyItem(item: any): void {
      if (this.kururuCoins >= item.price) {
        this.kururuCoins -= item.price;
        switch (item.name) {
          case "Hammer":
            this.hammer++;
            this.cps += item.cps
            break;
          case "Herta":
            this.herta++;
            this.cps += item.cps
            break;

        }
      }
    },
    kururing(): void {
      this.kururuCoins++
      this.createHerta()
    }
  },
};
</script>

<style scoped>
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
