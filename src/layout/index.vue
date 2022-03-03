<script setup>
import { Navbar, Sidebar, AppMain } from './components';

const scrollHeight = document.body.clientHeight - 60;
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
                <el-scrollbar :height="scrollHeight">
                    <div class="scroll-content">
                        <AppMain />
                    </div>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    .el-header {
        line-height: 60px;
        padding: 0;
    }

    .el-main {
        padding: 0;
    }

    .scroll-content {
        padding: 20px;
    }
}
</style>
