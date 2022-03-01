<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>
