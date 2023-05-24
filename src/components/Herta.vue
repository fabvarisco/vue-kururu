<template>
    <div class="herta-container">
        <button class="herta-button"  @click="HertaSpining()">
            <img src="../assets/herta stuff/herta.gif" alt="KURURING!" class="herta-position herta-gif herta-none" id="herta-gif" />
            <img src="../assets/herta stuff/herta.png" alt="KURURING!" class="herta-position herta-png herta-block" id="herta-png" />
        </button>
    </div>
</template>

<script lang="ts">

export default {
    name:"Herta",
    emits:['spining'],
    data() {
        return {
            hertaSpining: false,
            timeout: 0
        }
    },
    methods: {
        HertaSpining() {
            let hertaPng: HTMLElement | null = document.getElementById('herta-png')
            let hertaGif: HTMLElement | null = document.getElementById('herta-gif')
            this.$emit('spining')
            if (!this.hertaSpining) {
                hertaPng?.classList.add("herta-none");

                hertaGif?.classList.remove("herta-none");
                hertaGif?.classList.add("herta-block");


                if (!this.timeout) {
                    this.timeout = setTimeout(() => {
                        hertaGif?.classList.add("herta-none");
                        hertaGif?.classList.remove("herta-block");
                        hertaPng?.classList.remove("herta-none");
                        hertaPng?.classList.add("herta-block");
                    }, 1000)
                } else {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        hertaGif?.classList.add("herta-none");
                        hertaGif?.classList.remove("herta-block");
                        hertaPng?.classList.remove("herta-none");
                        hertaPng?.classList.add("herta-block");
                    }, 1000)
                }


            }


        }
    }
}

</script>

<style scoped>
.herta-button {
    all: unset;
}
.herta-container {
    position: fixed;
    top: 63%;
    left: 40%;
    transform: translate(-50%, -50%);
    scale: .6;
}



.herta-position {
    height: calc(100% - 10px);
    object-fit: contain;
}
.herta-gif {
    transform: translate(-50%, -60%);

}
.herta-png {
    transform: translate(-50%, -50%);

}
.herta-block {
    display: block;
}

.herta-none {
    display: none;
}
</style>
