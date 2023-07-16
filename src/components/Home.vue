<script setup lang="ts">

</script>

<template>
    <header class="kururing-title">
        <h1>Kururidle</h1>
    </header>
    <article class="kururu-main">
        <div class="kururu-container">

            <div>login</div>
            <div>
                <label>Username:</label>
                <input />
            </div>
            <div>
                <label>Password: </label>
                <input />
            </div>
            <div>
                <button>Login</button>
                <button>Create Account</button>
            </div>
        </div>
    </article>
</template>

<style scoped>
.kururing-title {
    display: flex;
    justify-content: center;
}
.kururu-main {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    flex-wrap: wrap;
}

.kururu-container {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 300px;
    border: 3px solid;
    border-radius: 11px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
</style>
