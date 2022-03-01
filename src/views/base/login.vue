<script setup>
import { ref } from 'vue';
console.log(ref);
</script>

<template>
    <el-row type="flex" align="middle" class="login-container">
        <el-col :span="8" :push="8">
            <el-form class="login-form" auto-complete="on" label-position="left">
                <div class="title-container">
                    <h3 class="title">Login Form</h3>
                </div>

                <el-form-item prop="username">
                    <el-input
                        placeholder="Username"
                        name="username"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="Password"
                        name="password"
                        tabindex="2"
                        auto-complete="on"
                    />
                </el-form-item>

                <el-button type="primary" style="width:100%;margin-bottom:30px;">Login</el-button>
            </el-form>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
$bg:#282923;
$light_gray:#fff;
$cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;
}
</style>
