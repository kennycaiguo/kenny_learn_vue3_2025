<template>
  <div>
    <button @click="test1">test1</button>
    <button @click="test2('abc')">test2</button>
    <button @click="test3('event:',$event)">test3</button>
    <button @click="test4($event)">test4</button>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        msg: "hello"
      }
    },
    methods: {
      test1(e) {
        alert(e.target.innerHTML)
      },
      test2(e) {
        alert(e)
      },
      test3(msg,e) {
        alert(msg + "---" + e.target.tagName)
        console.log(e)
      },
      test4(e){
        // alert(e.target.tagName)
        console.log(event)
      }
    },
  }

</script>

<style scoped>

</style>
