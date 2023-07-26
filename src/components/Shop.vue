<script setup lang="ts">
import { ref } from 'vue';

const shopActive = ref<boolean>(true);
const upgradesActive = ref<boolean>(true);

const items = [
  { id: 1, name: 'Spining Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: 'Giant Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: 'Floating Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: 'Screen Saver Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
]
const upgrades = [
  { id: 1, name: 'Relics', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: 'Hammer', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: '~kururing bonus', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
]

defineEmits(['buyItem'])

</script>

<template >
  <div class="shop-container">
    <div class="header">
      <button>Shop</button>
      <button>Upgrades</button>
    </div>
    <div v-if="shopActive">
      <h2 class="title">Shop</h2>
      <div class="grid-container">
        <button v-for="item in items" :key="item.id" class="grid-item"
          @click="$emit('buyItem', { name: item.name, cps: item.cps, price: item.price })">
          <p>{{ item.name }}</p>
          <p>Price {{ item.price }}</p>
          <p>Cps {{ item.cps }}</p>
          <img class="image-size" src="../assets/herta stuff/hammer.png" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shop-container {
  width: 100%;
  height: 100%;
  background: grey;
}

.header {
  display: flex;
  justify-content: start;
}

.image-size {
  height: 80px;
}

.grid-container {
  background-color: gray;
  margin: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4px;
  border-radius: 5px;
}

.grid-item {
  background-color: #ccc;
  padding: 10px;
  height: fit-content;
}

.title {
  text-align: center;
  color: white;
}

</style>

