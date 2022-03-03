<script setup>
import { toRefs } from 'vue';
import { resolve } from 'path-browserify';
import Node from './node.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    basePath: {
        type: String,
        default: ''
    }
});

const {
    data: { value: {
        path,
        children,
        meta = {}
    }},
    basePath: { value: basePath }
} = toRefs(props);

// TODO: Opt
const [visible, multiple, available, title, finalPath] = children ? (() => {
    const available = children.filter(({ meta }) => !meta?.hidden);
    const multiple = available.length > 1;

    const onlyOne = available.length === 1;
    const [first] = available;
    const title = onlyOne ? first.meta?.title : meta?.title;
    const finalPath = resolve(basePath, path, onlyOne ? first.path : '');

    return [available.length > 0, multiple, available, title, finalPath];
})() : [true, false, null, meta?.title, resolve(basePath, path)];
</script>

<template>
    <template v-if="visible">
        <el-sub-menu
            v-if="multiple"
            :index="finalPath"
        >
            <template #title>
                <Node :title="title" />
            </template>
            <SidebarItem
                v-for="item in available"
                :key="resolve(finalPath, item.path)"
                :data="item"
                :base-path="finalPath"
            />
        </el-sub-menu>

        <el-menu-item v-else :index="finalPath">
            <Node :title="title" />
        </el-menu-item>
    </template>
</template>
