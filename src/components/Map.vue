<script lang="ts" setup>

</script>

<template>
    <div class="kururu-map">
        <button>Map</button>
    </div>
</template>
<style>
@media only screen and (max-width: 700px) {
    .kururu-map {
        display: none;
    }
}

@media only screen and (min-width: 700px) {
    .kururu-map {
        position: absolute;
        top:0;
    }
}
</style>