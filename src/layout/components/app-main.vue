<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
            <div :key="route.path">
                <component :is="Component" />
            </div>
        </transition>
    </router-view>
</template>
