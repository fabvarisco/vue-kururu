<script setup lang="ts">
import { ref, reactive } from 'vue';
interface Props {
  playerShopItems: IPlayerShopItems
}

const props = defineProps<Props>()


const emit = defineEmits(['buyItem'])

function WrapperDiv(wrapper: string | undefined): string {

  return wrapper ? wrapper : ""
}

function buyItem(itemKey: shopItemKey) {
  emit('buyItem', itemKey)

}

const items = reactive<IShopItem[]>([
  { id: 1, name: 'Spining Herta', key: 'spiningHerta', emitName: "hertaEvent", src: "./src/assets/herta-stuff/herta.gif", css: "" },
  { id: 2, name: 'Giant Herta', key: 'giantHerta', emitName: "hertaEvent", src: "./src/assets/herta-stuff/herta.png", css: "giant-herta" },
  { id: 3, name: 'Floating Herta', key: 'floatingHerta', emitName: "hertaEvent", src: "./src/assets/herta-stuff/herta.png", css: "floating-herta" },
  { id: 4, name: 'Screen Saver Herta', key: 'screenSaverHerta', emitName: "hertaEvent", src: "./src/assets/herta-stuff/herta.png", wrapperDiv: 'herta-screen-x', css: "herta-screen herta-screen-y" },
]);

</script>

<template >
  <div class="shop-container">
    <div>
      <h2 class="title">Shop</h2>
      <div class="grid-container">
        <button v-for="item in items" :key="item.id" class="grid-item" @click="buyItem(item.key)">
          <div>
            <h2>{{ item.name }}</h2>
            <p>Price {{ playerShopItems[item.key].price }}</p>
            <p>Cps {{ playerShopItems[item.key].cps }}</p>
            <p>Level {{ playerShopItems[item.key].level }}</p>
          </div>
          <div :class="WrapperDiv(item?.wrapperDiv)">
            <img :class="`image-size ${item.css}`" :src="item.src" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shop-container {
  padding: 12px;
  width: 100%;
  height: 100%;
  background: grey;
}


.image-size {
  height: 80px;
  transform: scale(1.5);

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
  position: relative;
  padding: 10px;
  height: 200px;
  display: flex;
  border: .01rem solid #e6e6e6;
  background-color: rgba(230, 230, 230, .5);
  border: 4px solid black;
  text-align: left;
  cursor: pointer;
}

.grid-item:hover {
  background-color: rgba(126, 126, 126, 0.5);
  border: 4px solid rgb(56, 35, 35);

}

.grid-item p {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-weight: bold;
  text-align: left;
}


.title {
  text-align: left;
  margin-left: 1.5rem;
  color: white;
}

/* ------------  */

.giant-herta {
  transform: translate(60%, 30%) scale(3);
  overflow: hidden;
  position: relative;

}

.floating-herta {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-20px);
  }

  100% {
    transform: translatey(0px);
  }
}

.herta-screen,
img {
  width: 80px;
  height: 80px;
}

.herta-screen-x {
  animation: herta-screen-x 2s linear infinite alternate;
}

.herta-screen-y {
  animation: herta-screen-y 4s linear infinite alternate;
}


@keyframes herta-screen-x {
  100% {
    transform: translateX(calc(100px - 20px));
  }
}

@keyframes herta-screen-y {
  100% {
    transform: translateY(calc(100px - 20px));
  }
}
</style>

