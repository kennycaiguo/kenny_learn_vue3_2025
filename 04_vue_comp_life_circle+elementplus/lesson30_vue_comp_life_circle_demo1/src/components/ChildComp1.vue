<template>
  <div class="chileBox1">
     <h2>我是子组件1</h2>
    <p>{{msg}}</p>
  </div>
</template>

<script setup>
import {ref,onMounted,onUnmounted} from "vue";
let msg = ref("Hello from Child1")

onMounted(()=>{
	 console.log("ChildComp1 Mounted")
 })  
 
 onUnmounted(()=>{
	 console.log("ChildComp1 UnMounted")
 })

</script>

<style scoped>
   .chileBox1{
     width: 500px;
     height: 400px;
     background-color: #f8f8f8;
   }
   
</style>