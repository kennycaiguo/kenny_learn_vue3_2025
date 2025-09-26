<template>
  <div id="wrap">
    <div class="inner"></div>
  </div>

</template>

<script setup>


</script>

<style lang="less" scoped>
   @color:purple;
   *{
     margin: 0;
     padding: 0;
   }

  .juzhong{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: @color;
    width: 100px;
    height: 100px;
  }

  #wrap{
    position: relative;
    width: 300px;
    height: 400px;
    border: 1px solid;
    margin: 0 auto;
    .inner{
       .juzhong;
       //伪类的写法
       &:hover{
         background-color: orange;
       }
    }

  }

</style>