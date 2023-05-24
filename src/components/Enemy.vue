<template>
    <div class="enemy-container">
        <img src="../assets/enemies/enemy_example.png" alt="ENEMY" class="enemy-position " id="enemy-id" />
    </div>
</template>

<script lang="ts">

export default {
    name:"Enemy",
    emits:['shake'],
    data() {
        return {
            shaking: false,
            timeout: 0
        }
    },
    methods: {
        shake(){
            
            let enemy: HTMLElement | null = document.getElementById('enemy-id')
            enemy?.classList.add("shaking");

            // if (!this.shaking) {
            //     enemy?.classList.add("shaking");
            //     if (!this.timeout) {
            //         this.timeout = setTimeout(() => {
            //             enemy?.classList.add("shaking");
            //         }, 1000)
            //     } else {
            //         clearTimeout(this.timeout);
            //         this.timeout = setTimeout(() => {
            //             enemy?.classList.add("shaking");

            //         }, 1000)
            //     }
        //}

        }
    }
}
    


</script>

<style scoped>

.enemy-container {
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translateY(-50%);
    scale: 1;
}
.shaking:hover {
  animation: shake 0.5s;

  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}


</style>
