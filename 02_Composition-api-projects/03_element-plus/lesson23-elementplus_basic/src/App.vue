<template>
  <div class="mb--4">
     <el-button>默认按钮</el-button>
     <el-button type="primary">Primary</el-button>
     <el-button type="success">Success</el-button>
     <el-button type="info">Info</el-button>
     <el-button type="warning">Warning</el-button>
     <el-button type="danger">Danger</el-button>
  </div>
  <br>
  <div class="button-row">
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
</template>

<script setup>
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
</script>

<style scoped>

</style>
