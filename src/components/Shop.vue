<template >
  <div class="grid-container">
    <button style="height: 80px;" v-for="item in items" :key="item.id" class="grid-item" @click="$emit(item.emitName)">
      <p>{{ item.name }}</p>
      <p>Price {{ item.price }}</p>
      <p>Cps {{ item.cps }}</p>
      <img class="image-size" src="../assets/herta stuff/hammer.png" />
    </button>
  </div>
</template>

<style scoped>
.image-size {
  height: 40px;
}

.grid-container {
  position: absolute;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  width: 400px;
  /* Adjust the width as needed */
  height: 400px;
  background: white;
  left: 70%;
}

.grid-item {
  background-color: #ccc;
  padding: 10px;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Herta', price: 10, cps: 1, emitName:"hertaEvent", src: "../assets/herta stuff/hammer.png" },
        { id: 2, name: 'Hammer', price: 10, cps: 10,emitName:"hammerEvent",src: "../assets/herta stuff/hammer.png" },

      ]
    };
  }
};
</script>