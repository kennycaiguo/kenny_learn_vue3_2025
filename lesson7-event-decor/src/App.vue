<template>
  <div>
    <div class="outer" @click.stop="fun1">
      <div class="middle" @click.stop="fun2">
        <div class="inner" @click.stop="fun3">

        </div>
      </div>
    </div>
    <a href="https://www.baidu.com/" @click.prevent="fun4">百度搜索</a>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        msg: "Hello"
      }
    },
    methods:{
      fun1(){
        console.log("outer的单击事件被触发")
      },
      fun2(){
        console.log("middle的单击事件被触发")
      },

      fun3(e){
        console.log("inner的单击事件被触发")
        // e.stopPropagation()
      },
      fun4(e){
        // alert("阻止超链接的跳转行为")
        // e.preventDefault()
      }
    }
  }

</script>

<style scoped>
   .outer{
     width: 300px;
     height: 300px;
     background-color: #999;
   }

   .middle{
     height: 200px;
     width: 200px;
     background-color: lightsteelblue;
   }

   .inner{
     width: 100px;
     height: 100px;
     background-color: lightcoral;
   }
</style>
