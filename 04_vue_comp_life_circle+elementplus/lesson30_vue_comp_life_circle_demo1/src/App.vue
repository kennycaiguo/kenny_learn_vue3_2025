<template>
  <div>
    <button @click="show1=!show1">{{show1?"隐藏子组件1":"显示子组件1"}}</button>
    <button @click="show2=!show2">{{show2?"隐藏子组件2":"显示子组件2"}}</button>
    <hr>
    <ChildComp1 v-if="show1"/>
    <ChildComp2 v-if="show2"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import ChildComp1 from "./components/ChildComp1.vue"
import ChildComp2 from "./components/ChildComp2.vue"
let show1 = ref(false)
let show2 = ref(false)

</script>

<style scoped>

</style>
