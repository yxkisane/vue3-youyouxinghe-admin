<template>
    <div class="not-found">
        <h1>404</h1>
        <h2>页面不存在</h2>
        <router-link to="/">返回首页</router-link>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Main'
};
</script>
<style scoped>
.not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>