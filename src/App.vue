<template>
    <router-link to="/">
        Go to Home
    </router-link>
    <br>
    <router-link to="/login">
        Go to Login
    </router-link>
    <br>
    <router-link to="/about">
        Go to About
    </router-link>

    <br>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
