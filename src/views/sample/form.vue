<template>
    <el-form style="border: 1px solid blue;background-color: green;">
        <el-form-item
            v-for="i in 50"
            :key="i"
            :label="`Label-${i}`"
        >
            <el-input placeholder="Please input" />
        </el-form-item>
    </el-form>
</template>
