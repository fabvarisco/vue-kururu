<script lang="ts" setup>
import { ref } from 'vue';

 const phoneModal = ref<boolean>(false);
 
</script>

<template>
    <div class="kururu-phone">
       <button @click="phoneModal=!phoneModal"> Phone</button>
    </div>
    <div class="kururu-dialog" v-if="phoneModal">
        <div>
            Content
        </div>
    </div>
</template>
<style>

@media only screen and (max-width: 700px) {
    .kururu-phone {
        position: absolute;
        right: 0;
        top:67%;
        z-index: 1000;
    }
}

@media only screen and (min-width: 700px) {
    .kururu-phone {
        position: absolute;
        right: 0;
        top:0;
        z-index: 1000;
    }
}


.kururu-dialog {
    position: absolute;
    top:0;
    right: 0;
    width: 30%;
    height: 70vh;
    background:gray;
    z-index: 100;
    opacity: 1;
    transform: translateX(0);
    animation: open-modal .3s linear;
}

@keyframes open-modal {
    0% {
        opacity: 0;
        transform:translateX(30px) ;
    }
    100%{
        opacity: 1;
        transform:translateX(0px) ;
    }
}

@keyframes close-modal {
    0% {
        opacity: 1;
        transform:translateX(0px) ;
    }
    100%{
        opacity: 0;
        transform:translateX(30px) ;
    }
}




</style>