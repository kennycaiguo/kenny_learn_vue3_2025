<template>
  <div class="chileBox2">
    <h2>我是子组件2</h2>
    <p>{{msg}}</p>
  </div>
</template>

<script setup>
import {ref,onBeforeMount,onBeforeUnmount} from "vue";
let msg = ref("Hello from Child2")

onBeforeMount(()=>{
	console.log("Before Mount...");
})
onBeforeUnmount(()=>{
	console.log("Before Unmount...");
})


</script>

<style scoped>
.chileBox2{
  width: 500px;
  height: 400px;
  background-color: pink;
}
</style>