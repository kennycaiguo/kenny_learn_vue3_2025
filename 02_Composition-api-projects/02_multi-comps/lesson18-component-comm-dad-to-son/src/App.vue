<template>
  <div>
     <ChildComp :msg="msg" :money="money" :user="user" :apples="apples"/>
  </div>
</template>

<script setup>
import {ref,reactive} from "vue";
import ChildComp from "./components/ChildComp.vue";

let msg = ref("孩子,爸爸给你点钱用用")
let money = ref(99999999999)
let user = reactive({
  id:"u001",
  name:"Jackline",
  gender:"female",
  age:18,
  email:"Jackline123@gmail.com"
})

let apples = reactive(["红富士","加纳","黄元帅","花花牛"])
</script>

<style scoped>

</style>
