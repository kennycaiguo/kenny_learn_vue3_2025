<template>
  <h3>渲染来自子组件的数据</h3>
  <MyList>
    <template #default="{acc}">
        <div style="margin-bottom: 5px;">
          <span>账户名称: {{acc.name}}</span>
          <span>账户余额: {{acc.money}}</span>
          <button @click="viewAccData(acc)">查看</button>
        </div>

    </template>
  </MyList>
</template>
<script setup>
import MyList from "./components/MyList.vue";
let viewAccData = (data) => {
  console.log(data)
}
</script>
<style scoped>
  span{
    padding-right: 10px;
    margin-right: 5px;
  }
  button{
    padding: 3px 6px;
  }
</style>
