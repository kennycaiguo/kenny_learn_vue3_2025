<template>
  <el-button plain @click="open">Click to open the Message Box</el-button>
</template>

<script  setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
      '是否删除编号为xx的用户?',
      '系统提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          type: 'success',
          message: '删除用户成功',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '删除操作被取消了',
        })
      })
}
</script>

<style scoped>

</style>
