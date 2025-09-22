<template>
  <div>
     <button @click="sendData">click</button>
  </div>
</template>

<script setup>
// import {defineEmits} from "vue"; //defineEmits现在已经在编译器里面,不需要导入
import {reactive} from "vue";

let emits = defineEmits(["customEvent"])

let worker = reactive({
  name:"jack",
  age:32,
  gender:"Male"
})
let sendData = ()=>{
  emits('customEvent',worker)
}
</script>

<style scoped>

</style>