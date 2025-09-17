<template>
  <div>
     <button @click="increment">+</button>  <span>当前计数: {{counter}}</span> <button @click="decrement">-</button>
    <h3>字符串翻转</h3>  
    输入一个字符串:<input type="text" v-model="msg"> <br>
    <p>翻转后的字符串:{{reversedMsg}}</p>
    姓氏: <input type="text" v-model="lastName">
    名字: <input type="text" v-model="firstName">
    <p>姓名:{{firstName}} {{lastName}}</p>
    <p>名字被修改了:{{num}}次</p>
    年龄:<input type="text" v-model="age">
    <p>年龄修改了{{change}}</p>
  </div>
</template>

<script setup>
  //当然相关的函数,在组合式api中,即使属性和监听器都是高阶函数,ref函数可以定义响应式数据
  import {ref,computed,onMounted,watch} from "vue";
   //定义响应式数据
   let counter = ref(0) //响应式数据,需要操作的是数据的value属性
   let msg = ref("Hello")
   let firstName = ref("Jet")
   let lastName = ref("lee")
   let num = ref(0)
   let age = ref(0)
   let change = ref(0)

   let increment = ()=>{
     counter.value++
   }
   let decrement = ()=>{
     counter.value--
   }
   let reversedMsg = computed(()=>{
     return msg.value.split("").reverse().join("") //响应式数据,需要操作的是数据的value属性
   })

   //注意watch的写法
   watch([firstName,lastName],()=>{
     num.value++
   })
  watch([age],()=>{ //watch函数可以多次调用,并且可以做不一样的事情
     change.value++
  })

  //生命周期函数
  onMounted(()=>{
    // alert("I am mounted")
    console.log("I am mounted")
  })
</script>

<style scoped>

</style>
