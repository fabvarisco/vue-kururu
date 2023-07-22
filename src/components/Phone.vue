<script lang="ts" setup>
import { ref } from 'vue';

const phoneModal = ref<boolean>(false);

function ModalController(){
    phoneModal.value = !phoneModal.value
}


</script>

<template>
    <div class="kururu-phone">
       <button @click="ModalController()"> Phone</button>
    </div>
    <span class="kururu-dialog" v-if="phoneModal">
        <div>
            <div>
                profile
            </div>
            <div>
                Username:
            </div>
            <div>
                Player info:
            </div>
            <div>
                Idler Level
            </div>
        </div>
        <div>
            <button> Skill Tree</button>
        </div>
        <div>
            <button> Social Media</button>
        </div>
    </span>
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
    top: 0px;
    right: 0px;
    width: 30%;
    height: 70vh;
    background:gray;
    z-index: 100;
    opacity: 1;
    transform: translateX(0px);
   
}

.kururu-open-modal {
    animation: open-modal .3s linear;
}

.kururu-close-modal {
    animation: close-modal .3s linear;
}


@keyframes open-modal {
    0% {
        display: block;
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
        transform:translateX(30px);
        display: none;
    }
}




</style>