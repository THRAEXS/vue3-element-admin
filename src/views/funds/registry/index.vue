<template>
    <el-alert :title="title" type="warning" effect="dark" show-icon :closable="false" />
</template>
<script>
export default {
    data() {
        return {
            title: '立项申请'
        };
    },
    created() {
        console.log('created:', this.title);
    }
};
</script>
