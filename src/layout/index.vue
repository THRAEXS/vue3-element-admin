<script setup>
import { Navbar, Sidebar, AppMain } from './components';
</script>

<template>
    <el-container class="layout-container">
        <el-aside>
            <Sidebar />
        </el-aside>
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <AppMain />
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.layout-container .el-header {
  line-height: 60px;
  padding: 0;
}

.layout-container .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>
