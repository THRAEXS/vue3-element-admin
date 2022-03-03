<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { DArrowLeft } from '@element-plus/icons-vue';

const router = useRouter();
const route = useRoute();
const store = useStore();

async function handleLogout() {
    await store.dispatch('user/logout');
    const { fullPath: redirect } = route;
    router.push({ path: '/login', query: redirect === '/' ? {} : { redirect }});
}
</script>

<template>
    <el-row>
        <el-col :span="24" align="right">
            <el-button
                type="danger"
                size="small"
                :icon="DArrowLeft"
                circle
                @click="handleLogout"
            />
        </el-col>
    </el-row>
</template>
