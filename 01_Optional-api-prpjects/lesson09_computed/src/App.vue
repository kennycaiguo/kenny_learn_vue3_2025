<template>
  <div>
    <h3>用计算属性实现字符串翻转</h3>
    <label>
      Enter a String: <input type="text" v-model="msg">
    </label>
    <p>Reserved: <span style="color: lightsteelblue;"> {{reversedMsg}}</span></p>
  </div>

</template>

<script>
  export  default {
    data() {
      return {
        msg: " "
      }
    },
    computed:{
      reversedMsg(){
        return this.msg.split("").reverse().join("")
      }
    }

  }

</script>

<style scoped>

</style>
