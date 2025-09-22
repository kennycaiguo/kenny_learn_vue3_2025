<template>
  <div>
     <ChildComp @customEvent="handleChildEvn"/>
  </div>
</template>

<script setup>
import ChildComp from "./components/ChildComp.vue";
let handleChildEvn = function (data) {
  console.log("子组件传递过来的数据:" ,data)
}
</script>

<style scoped>

</style>
