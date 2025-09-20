<template>
  <div>
     <div class="box">{{counter}}</div>
     <button @click="increment">increase</button>
     <button @click="decrement">decrease</button>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        counter: 0
      }
    },
    methods:{ //有快捷键vmethod
      increment(){
        this.counter++;
      },
      decrement(){
        this.counter--;
      }
    }
  }

</script>

<style scoped>

</style>
