<script setup>
import { DArrowLeft } from '@element-plus/icons-vue';

function handleLogout() {
    alert('logout...');
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
