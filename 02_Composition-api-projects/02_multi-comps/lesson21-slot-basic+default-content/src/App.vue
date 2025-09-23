<template>
  <div>
     <MyButton @click="handleLogin">Login</MyButton>
     <MyButton>Register</MyButton>
     <MyButton>Logout</MyButton>
     <MyButton></MyButton>
     <MyButton>Contact</MyButton>
  </div>
</template>

<script setup>
import MyButton from "./components/MyButton.vue";
let handleLogin = ()=>{
  alert("Login...")
}
</script>

<style scoped>

</style>
