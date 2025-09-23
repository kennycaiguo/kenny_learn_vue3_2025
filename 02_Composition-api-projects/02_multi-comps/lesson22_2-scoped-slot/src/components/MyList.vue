<template>
  <ul>
    <li v-for="acc in accounts" :key="acc.number">
      <slot :acc="acc"></slot>
    </li>
  </ul>
</template>

<script setup>
import {reactive} from "vue";
let accounts = reactive([
  {number:1001001001,name:"Jack",money:10000000000},
  {number:1001001002,name:"Brenda",money:10900000000},
  {number:1001001003,name:"Mary",money:9900000000},
])
</script>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>