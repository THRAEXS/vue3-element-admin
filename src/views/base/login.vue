<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { User, Lock } from '@element-plus/icons-vue';

const router = useRouter();
const route = useRoute();
const store = useStore();

const form = ref({ username: 'master', password: '111111' });
const loading = ref(false);
const data = reactive({ form, loading });

function handleLogin() {
    data.loading = true;
    store.dispatch('user/login', data.form)
        .then(() => router.push(route.query.redirect ?? '/'))
        .catch(error => console.error('Login error:', error))
        .finally(() => (data.loading = false));
}
</script>

<template>
    <el-row class="login-container">
        <el-col :span="8" :push="8" style="top: 20vh;">
            <h3 class="title">Login Form</h3>

            <el-form
                :model="form"
                class="login-form"
                auto-complete="on"
                label-position="left"
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="form.username"
                        placeholder="Username"
                        name="username"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                        :prefix-icon="User"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        tabindex="2"
                        auto-complete="on"
                        :prefix-icon="Lock"
                    />
                </el-form-item>

                <el-button
                    type="primary"
                    style="width:100%;"
                    :loading="loading"
                    @click="handleLogin"
                >
                    Login
                </el-button>
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

    .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
}
</style>
