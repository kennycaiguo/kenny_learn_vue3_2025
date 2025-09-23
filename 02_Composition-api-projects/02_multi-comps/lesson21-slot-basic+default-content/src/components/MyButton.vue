<template>
  <button>
    <slot>默认按钮</slot>
  </button>
</template>

<script setup>


</script>

<style scoped>
   button{
     padding: 8px 15px;
     border: none;
     background: linear-gradient(to right,deeppink,mediumpurple);
     border-radius: 5px;
     color:white;
     margin: 5px;
   }
</style>