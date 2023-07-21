<script lang="ts" setup>

</script>

<template>
    <div class="kururu-phone">
        Phone
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
    }
}

</style>