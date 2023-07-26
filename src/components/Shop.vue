<script setup lang="ts">

const items = [
  { id: 1, name: 'Spining Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: 'Giant Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
  { id: 1, name: 'Floating Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },

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
    <div>
      <h2 class="title">Shop</h2>
      <div >

      </div>
    </div>
  </div>
</template>

<style scoped>
.image-size {
  height: 40px;
}

.grid-container {
  background-color: gray;
  margin: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

.shop-container {
  background: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 2 columns */
  grid-gap: 10px;
  /* Gap between grid items */
  height: 100vh;
  width: 100wh;
}

@media (max-width: 767px) {
  .shop-container {
    grid-template-columns: 1fr;
    /* 1 column */
    grid-template-rows: 1fr 1fr;
    /* 2 rows */
  }
}
</style>

