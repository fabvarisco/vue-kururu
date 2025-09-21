<script setup lang="ts">
import { ref, onMounted } from 'vue'

const position = ref({ x: "100vw", y: "220vh" })
const maxPosition = ref({ x: window.innerWidth - 100 + "px", y: window.innerHeight - 100 + "px" })

function randomizePosition() {
  position.value.x = Math.random() * (window.innerWidth - 100) + "px"
  position.value.y = Math.random() * (window.innerHeight - 100) + "px"

  console.log(position)
}

onMounted(() => {

  randomizePosition()
})

</script>



<template>
    <div class="herta-screen-x">
        <img src="../../assets/herta-stuff/herta.png" class="herta-screen-y" />
    </div>
</template>

<style scoped>
img {
    width: 80px;
    height: 80px;
}

.herta-screen-x {
    position: absolute;
    animation: herta-screen-x 13s infinite alternate ;
}

.herta-screen-y {
    animation: herta-screen-y 7s infinite alternate ;
}


@keyframes herta-screen-x {
    100% {
        transform: translateX(calc(v-bind('maxPosition.x') - v-bind('position.x')));
    }
}

@keyframes herta-screen-y {
    100% {
        transform: translateY(calc(v-bind('maxPosition.y') - v-bind('position.y')));
    }
}
</style>
