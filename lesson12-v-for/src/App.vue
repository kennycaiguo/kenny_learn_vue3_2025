<template>
  <div>
    <input type="text" v-model="newLang"> <button @click="handleClk">add</button>
     <h3>编程语言</h3>
    <ul>
      <li v-for="lang in langs">{{lang}}</li>
    </ul>
    <button @click="emptyLangs">清空列表</button>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        newLang:"",
        langs: ["Java","Cpp","Golang","Rust"]
      }
    },
    methods:{
      handleClk(){
        if(this.newLang.length){
          // alert(this.newLang)
          if(!this.langs.includes(this.newLang)){
            this.langs.push(this.newLang)
            //清空输入框
            this.newLang = " "
          }
        }
      },
      emptyLangs(){
        this.langs=[]
      }
    }
  }

</script>

<style scoped>

</style>
