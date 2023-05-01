<template>
    <el-row class="tac">
        <el-col :span="12">
            <el-menu active-text-color="#ffd04b" background-color="#545c64" router default-active="this.$router.path"
                class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item index="/main">
                    <el-icon>
                        <Menu />
                    </el-icon>
                    <span>主页</span>
                </el-menu-item>
                <el-menu-item index="2" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>菜单</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>菜单</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
    name: 'Aside',
    setup() {
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        };
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        };
        return {
            handleOpen, handleClose
        }
    }
});
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
</style>
