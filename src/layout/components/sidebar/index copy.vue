<script setup>
import { Setting } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const routes = router.options.routes.filter(({ meta }) => !meta?.hidden);

const available = routes.map(it => {
    if (it.children.length > 1) {
        const { path, meta, children } = it;
        return { path, meta, children };
    } else {
        const [first] = it.children;
        const { path, meta } = first;
        const newPath = path.startsWith('/') ? path : path ? `${it.path}/${path}` : it.path;

        return { path: newPath, meta };
    }
});
</script>

<template>
    <el-menu
        background-color="#181915"
        active-text-color="#FFD04B"
        text-color="#FFFFFF"
        :router="true"
    >
        <template v-for="{ path, meta, children } in available">
            <el-sub-menu
                v-if="children?.length > 0"
                :key="path"
                :index="path"
            >
                <template #title>
                    <el-icon><Setting /></el-icon>
                    <span>{{ meta?.title }} - {{ path }}</span>
                </template>
                <el-menu-item
                    v-for="item in children"
                    :key="`${path}/${item.path}`"
                    :index="`${path}/${item.path}`"
                >
                    <el-icon><Setting /></el-icon>
                    <span>{{ item.meta?.title }} - {{ `${path}/${item.path}` }}</span>
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :key="`k-${path}`" :index="path">
                <el-icon><Setting /></el-icon>
                <span>{{ meta?.title }} - {{ path }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
