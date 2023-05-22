<script lang="ts">

export default {
    data(){
        return {
            size:"",
            position:{x:"",y:""}
        }
    },
    created(){
        this.size = Math.random() * 200 + "px"
        this.position.y = Math.random() * window.innerHeight + "px"
        this.position.x = Math.random() * window.innerWidth  + "px"
    }
}

</script>

<template>
    <span><img src="../assets/herta stuff/herta.gif" alt="KURURING!" class="kururu-spining" /></span>
</template>



<style scoped>

.kururu-spining{
    pointer-events: none;
    position: absolute;
    width: v-bind('size');
    height: v-bind('size');
    top: v-bind('position.y');
    left: v-bind('position.x');

}
</style>
