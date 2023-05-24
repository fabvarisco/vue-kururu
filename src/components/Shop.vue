<template >
  <div class="shop-container">
    <div class="grid-container">
      <button style="height: 120px;" v-for="item in items" :key="item.id" class="grid-item"
        @click="$emit('buyItem', { name: item.name, cps: item.cps, price: item.price })">
        <p>{{ item.name }}</p>
        <p>Price {{ item.price }}</p>
        <p>Cps {{ item.cps }}</p>
        <img class="image-size" src="../assets/herta stuff/hammer.png" />
      </button>
    </div>
    <div style="position: sticky; top: 0;">
        asdasddas
    </div>
  </div>
</template>

<style scoped>
.image-size {
  height: 40px;
}

.grid-container {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.grid-item {
  background-color: #ccc;
  padding: 10px;
}

.shop-container {
  background: cadetblue;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 columns */
  grid-gap: 20px; /* Gap between grid items */
}

@media (max-width: 767px) {
  .shop-container {
    grid-template-columns: 1fr; /* 1 column */
    grid-template-rows: 1fr 1fr; /* 2 rows */
  }
}

</style>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Herta', price: 10, cps: 1, emitName: "hertaEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10, emitName: "hammerEvent", src: "../assets/herta stuff/hammer.png" },

      ],
      emits: ['buyItem']
    };
  }
};
</script>