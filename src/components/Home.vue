<script setup lang="ts">
import { supabase } from '@/supabase';
import type { User } from '@supabase/supabase-js';
import { ref, onUpdated } from 'vue';

interface IUser {
    username: string;
    email: string;
    password: string;
}

const isNewAccount = ref<boolean>(true);

const user = ref<IUser>({ username: '', email: '', password: '' })

async function CreateAccount() {
    console.log(user)
    const { data, error } = await supabase.auth.signUp({
        email: user.value.email,
        password: user.value.password
    })
    console.log(data)
    console.log(error)
}

async function Login() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: user.value.email,
        password: user.value.password
    })
    console.log(data)
    console.log(error)
}

async function getCurrentUser() {
    const localUser = await supabase.auth.getSession();
    console.log(localUser)
}

</script>

<template>
    <header class="kururing-title">
        <h1>Kururidle</h1>
    </header>
    <section class="kururu-main">
        <section>
            <form @submit.prevent="Login">
                <div class="kururu-container" v-if="isNewAccount">
                    <div>login</div>
                    <label>Email:</label>
                    <input type="email" name="email" v-model="user.email"/>

                    <label>Password: </label>
                    <input type="password" v-model="user.password"/>
                    <div>
                        <button type="submit">Login</button>
                        <button @click="isNewAccount = false">Create Account</button>
                    </div>
                </div>
            </form>
        </section>
        <section>
            <form @submit.prevent="CreateAccount">
                <div class="kururu-container" v-if="!isNewAccount">
                    <div>Create Account</div>
                    <label>Username:</label>
                    <input type="text" name="username" v-model="user.username" />
                    <label>Email:</label>
                    <input type="email" v-model="user.email" />
                    <label>Password: </label>
                    <input type="password" v-model="user.password" />
                    <label>Confirm Password: </label>
                    <input type="password"/>
                    <div>
                        <button type="submit">Create Account</button>
                        <button @click="isNewAccount = true">Back</button>
                        <button @click="getCurrentUser()">Back</button>

                    </div>
                </div>
            </form>
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
