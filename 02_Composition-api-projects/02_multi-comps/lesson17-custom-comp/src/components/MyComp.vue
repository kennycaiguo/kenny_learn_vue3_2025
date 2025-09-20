<template>
  <div class="root">
    <div class="title">
      <h4>静夜思</h4>
      <span class="btn" @click="flag=!flag">{{flag?"折叠":"展开"}}</span>
    </div>
    <div class="content" v-show="flag">
      <h5>床前明月光</h5>
      <h5>疑是地上霜</h5>
      <h5>抬头望明月</h5>
      <h5>低头思故乡</h5>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  let flag = ref(true)
</script>

<style scoped>
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0 16px;
  }

  .title>h4{
    margin: 0;
    line-height: 32px;
  }
  .btn{
    cursor: pointer;
   }
  .content{
    border: 1px solid #ccc;
    padding: 0 16px;
  }
</style>