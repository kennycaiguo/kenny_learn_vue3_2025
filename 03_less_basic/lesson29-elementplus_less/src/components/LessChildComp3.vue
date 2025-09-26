<template>
  <div id="wrap">
    <div class="inner"></div>
    <div class="inner2"></div>
  </div>

</template>

<script setup>


</script>

<style lang="less" scoped>
  .juzhong(@w,@h,@c,@t,@l){
    position: absolute;
    left: @l;
    right: 0;
    top: @t;
    bottom: 0;
    margin: auto;
    background: @c;
    width: @w;
    height: @h;
  }

  #wrap{
    position: relative;
    width: 300px;
    height: 400px;
    border: 1px solid;
    margin: 0 auto;
    .inner{
       .juzhong(100px,100px,deeppink,20,50);
    }
    .inner2{
      .juzhong(150px,150px,orange,0,0);
    }
  }

</style>