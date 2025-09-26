<template>
  <div id="wrap">
    <div class="inner"></div>
<!--    <div class="inner2"></div>-->
  </div>
  <ul>
    <li></li>
  </ul>
</template>

<script setup>


</script>

<style lang="less" scoped>
  .juzhong{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: deeppink;
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
    }
    .inner2{
      .juzhong;
    }
  }
  li{
    .juzhong;
  }
</style>