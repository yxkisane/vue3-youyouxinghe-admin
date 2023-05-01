<template>
  <el-container style="padding: 0; margin: 0;">
    <el-aside width="200px" style="padding: 0; margin: 0;">
      <Aside />
    </el-aside>
    <el-container style="padding: 0; margin: 0;">
      <el-header style="padding: 0; margin: 0;">
        <Header />
      </el-header>
      <el-main style="padding: 0; margin: 0;">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Index',
  components: {
    Aside,
    Header,
  },
});
</script>
<style scoped>
</style>
