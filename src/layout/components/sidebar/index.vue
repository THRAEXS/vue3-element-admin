<script setup>
import SidebarItem from './SidebarItem.vue';
import { useRouter, useRoute } from 'vue-router';

const { options: { routes }} = useRouter();
const available = routes.filter(({ meta }) => !meta?.hidden);
const { path: activeMenu } = useRoute();
</script>

<template>
    <el-menu
        background-color="#181915"
        active-text-color="#FFD04B"
        text-color="#FFFFFF"
        :router="true"
        :default-active="activeMenu"
    >
        <SidebarItem
            v-for="item in available"
            :key="item.path"
            :data="item"
            :base-path="item.path"
        />
    </el-menu>
</template>
