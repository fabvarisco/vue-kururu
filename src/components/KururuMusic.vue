<template>
    <audio ref="audio" autoplay="true" src="src/assets/audios/kururing_music.mp3" loop id="audio" hidden></audio>
    <button @click="ToggleMusic()">Toggle audio</button>
</template>

<script lang="ts">
export default {
    data() {
        return {
            disableAudio: false
        }
    },
    methods: {
        ToggleMusic(){
            const player:HTMLMediaElement = document.getElementById('audio') as HTMLMediaElement;
            this.disableAudio = !this.disableAudio
            
            if (this.disableAudio) {
                player.pause()
            }else{
                player.play()
            }
        }
    }
}

</script>

<style scoped>
.kururu-container {
    width: 100%;
    height: 50%;
}

.kururu-image {
    position: absolute;
    top: 50%;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    animation: moveImage 3s linear infinite;
}

@keyframes moveImage {
    0% {
        left: 0;
    }

    100% {
        left: calc(90% - 100px);
    }
}
</style>
