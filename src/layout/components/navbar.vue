<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { Setting } from '@element-plus/icons-vue';

const router = useRouter();
const route = useRoute();
const store = useStore();

async function handleLogout() {
    await store.dispatch('user/signout');
    const { fullPath: redirect } = route;
    router.push({ path: '/signin', query: redirect === '/' ? {} : { redirect }});
}
</script>

<template>
    <el-row class="navbar">
        <el-col :span="24" align="right">
            <el-button
                type="danger"
                size="small"
                color="#373835"
                :icon="Setting"
                circle
                @click="handleLogout"
            />
        </el-col>
    </el-row>
</template>

<style list="scsss" scoped>
.navbar {
    background: #FFFFFF;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .1);
    padding: 0 10px;
}
</style>
