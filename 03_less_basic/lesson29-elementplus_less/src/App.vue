<template>
<!--  <div class="outer">-->
<!--    <div class="inner">-->
<!--      <h1>Hello</h1>-->
<!--    </div>-->
<!--  </div>-->
<!--  <hr>-->
<!--  <LessChildComp />-->
<!--  <LessChildComp2 />-->
  <LessChildComp3 />
</template>

<script setup>
  import LessChildComp from "./components/LessChildComp.vue";
  import LessChildComp2 from "./components/LessChildComp2.vue";
  import LessChildComp3 from "./components/LessChildComp3.vue";

</script>

<style  lang="less" scoped>
     @gld: gold;
    .outer{
      width: 300px;
      height: 300px;
      background-color: antiquewhite;
      .inner{
        width: 200px;
        height: 200px;
        background-color: aqua;
        h1{
          background-color: @gld;
        }
      }
    }
</style>
