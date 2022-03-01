<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const routes = router.options.routes;
console.log(routes);
</script>

<template>
    <el-scrollbar>
        <el-menu
            background-color="#ff0000"
        >
            Menu
        </el-menu>
    </el-scrollbar>
</template>
