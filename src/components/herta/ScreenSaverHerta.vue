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
        transform: translateX(calc(100vw - 100px));
    }
}

@keyframes herta-screen-y {
    100% {
        transform: translateY(calc(100vh - 100px));
    }
}
</style>
