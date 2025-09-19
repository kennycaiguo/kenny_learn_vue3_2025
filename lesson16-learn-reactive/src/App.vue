<template>
  <div>
       Id: <input type="text" v-model="stu.id">
     Name:<input type="text" v-model="stu.name">
   Gender:<input type="text" v-model="stu.gender">
      age:<input type="text" v-model="stu.age">
    Phone:<input type="text" v-model="stu.phone">
    <h3>Student information</h3>
    <ul>
      <li v-for="prop in stu">{{prop}}</li>
    </ul>
  </div>
</template>

<script setup>

 import {reactive} from "vue";

 let stu = reactive({
   id:1001,
   name:"Jackline",
   gender:"Female",
   age:18,
   phone:"12345678"
 })

</script>

<style scoped>

</style>
