<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="用户名称">
      <el-input v-model="formInline.userName" placeholder="用户名称" clearable />
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="formInline.phone" placeholder="手机号码" clearable />
    </el-form-item>
    <el-form-item label="用户状态">
      <el-select
          v-model="formInline.status"
          placeholder="用户状态"
          clearable
      >
        <el-option  value="正常" />
        <el-option  value="禁用" />
      </el-select>
    </el-form-item>
    <el-form-item label="创建日期">
      <el-date-picker
          v-model="formInline.date"
          type="daterange"
          range-separator="To"
          placeholder="Pick a date"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
  {{formInline}}
</template>

<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  userName: '',
  phone: '',
  status:"",
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.el-form-item label{
  font-weight: bold;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>