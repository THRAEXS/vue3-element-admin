<script setup>
import SidebarItem from './SidebarItem.vue';
import { useRouter, useRoute } from 'vue-router';

import { menuBg, textColor, activeTextColor } from './color';

const { options: { routes }} = useRouter();
const available = routes.filter(({ meta }) => !meta?.hidden);
const { path: activeMenu } = useRoute();

const bodyHeight = document.body.clientHeight;
</script>

<template>
    <el-scrollbar :height="bodyHeight" :wrap-style="`background-color: ${menuBg};`">
        <el-menu
            :background-color="menuBg"
            :text-color="textColor"
            :active-text-color="activeTextColor"
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
    </el-scrollbar>
</template>

<style scoped>
.el-menu {
    border-right: 1px solid #181915;
}
</style>
