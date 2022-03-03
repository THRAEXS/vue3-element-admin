<script setup>
import { Setting } from '@element-plus/icons-vue';

defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>

<template>
    <el-icon><Setting /></el-icon>
    <span>{{ title }}</span>
    <!-- <span>{{ title }} - {{ title }} - {{ title }} - {{ title }} - {{ title }}</span> -->
</template>
