<template>
  <div class="box">
    <h2>属性绑定</h2>
    <a :href="linkUrl" target="_blank" class="link">Welcome to Pinterest</a> <br>
    <img :src="imgUrl" alt="" style="width: 650px;height: 500px" class="pic">
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        linkUrl: "https://www.pinterest.com/lmimic/cute-cartoon-character/",
        imgUrl : "https://i.pinimg.com/1200x/e7/60/d3/e760d33d5dd52563572ed6b538340571.jpg"
      }
    },
  }

</script>

<style scoped>
   .box{
     padding: 10px;
     width: 600px;
     height: 500px;
     margin: 0 auto;
     text-align: center;
   }

   .link{
     font-size: 30px;
     text-decoration: none;
     background-color: lightsteelblue;
   }
   .pic{
     margin-top: 10px;
   }

</style>


