<template>
  <div>
    <p>来自父亲组件的消息:{{msg}}</p>
    <p>父亲给我的钱:{{money}}</p>
    <div>
      <h3>父亲给我的用户信息:</h3>
      <p>Name:{{user.name}}, age:{{user.age}},gender:{{user.gender}},email:{{user.email}}</p>
    </div>
    <p>
      父亲给我的苹果: <span v-for="apple in apples">{{apple}}--</span>
    </p>
  </div>
</template>

<script setup>
  import {defineProps} from "vue";
  //子组件接收父组件的数据,props会自动解包
  let props = defineProps({
      msg:String,
      money:Number,
      user:Object,
      apples:Array
  })

</script>

<style scoped>

</style>

