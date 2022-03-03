<script setup>
import SidebarItem from './SidebarItem.vue';
import { useRouter, useRoute } from 'vue-router';

const { options: { routes }} = useRouter();
const available = routes.filter(({ meta }) => !meta?.hidden);
const { path: activeMenu } = useRoute();

const bodyHeight = document.body.clientHeight;
const [menuBg, textColor, activeTextColor] = ['#181915', '#FFFFFF', '#FFD04B'];
</script>

<template>
    <el-scrollbar :height="bodyHeight" :wrap-style="`background-color: ${menuBg};`">
        <el-menu
            :background-color="menuBg"
            :text-color="textColor"
            :active-text-color="activeTextColor"
            :router="true"
            :default-active="activeMenu"
            :style="{ borderRight: `1px solid ${menuBg}` }"
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
