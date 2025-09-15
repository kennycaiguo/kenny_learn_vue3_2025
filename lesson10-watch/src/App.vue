<template>
  <div>
    姓氏: <input type="text" v-model="lastName">
    名字: <input type="text" v-model="firstName">
    <p>姓名:{{lastName}} {{firstName}}</p>
    <p>姓名修改了{{num}}次</p>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        firstName: "Tracy",
        lastName: "Lou",
        num:0
      }
    },
    watch: {
      firstName() {
        this.num++
      } ,
      lastName() {
        this.num++
      }
    },
  }

</script>

<style scoped>

</style>
