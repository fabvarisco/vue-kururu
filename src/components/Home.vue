<script setup lang="ts">
import { supabase } from '@/supabase';
import { ref } from 'vue';

const isNewAccount = ref<boolean>(true);

function CreateAccount(){}

function Login(){
    
}

</script>

<template>
    <header class="kururing-title">
        <h1>Kururidle</h1>
    </header>
    <section class="kururu-main">
        <section>
            <div class="kururu-container" v-if="isNewAccount">
                <div>login</div>
                <label>Username:</label>
                <input />

                <label>Password: </label>
                <input />
                <div>
                    <button>Login</button>
                    <button @click="isNewAccount=false">Create Account</button>
                </div>
            </div>
        </section>
        <section>
            <div class="kururu-container" v-if="!isNewAccount">
                <div>Create Account</div>
                <label>Username:</label>
                <input />
                <label>Username:</label>
                <input />
                <label>Password: </label>
                <input />
                <label>Confirm Password: </label>
                <input />
                <div>
                    <button>Create Account</button>
                    <button @click="isNewAccount=true">Back</button>
                </div>
            </div>
        </section>
    </section>
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
