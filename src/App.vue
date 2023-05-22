<template>
  <main>
    <KururuMusic />
    <div>
      <Herta v-for="kururu in hertaList" :key="kururu.id" :hertaSize="convertSizeToPx(kururu.size)"/>
    </div>
    <div>
      <button class="kururin-button" @click="kururing">KURURU</button>
    </div>
    <div>
      <Shop />
    </div>
    <div>
      <p>Kururu Coins: {{ kururuCoins }} </p>
      <p>Cps: {{ cps }} </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import Herta from './components/Herta.vue';
import Shop from './components/Shop.vue';
import KururuMusic from './components/KururuMusic.vue';
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
      cps: 0
    };
  },
  mounted() {
    	this.startGame()
  },
  methods: {
    startGame():void{
      setInterval(() => {
      this.kururuCoins += this.cps;
      }, 1000);
    },
    createHerta():void{
      const newHerta: IHertaComponent = { id: "0", name: "kururu", size: 100, rotation: false };
        this.hertaList.push(newHerta);
        setTimeout(() => {
          const index = this.hertaList.findIndex(item => item.id === newHerta.id);
          if (index !== -1) {
            this.hertaList.splice(index, 1);
          }
        }, 3000);
    },
    convertSizeToPx(size:number):string{
      return size + "px"
    },
    kururing(): void {
      this.kururuCoins++
      this.createHerta()
    }
  },
};
</script>

<style scoped>
.kururin-button {
  background: #7b5cad;
  width: 200px;
  height: 48px;
  border: #392a64 solid 2px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
