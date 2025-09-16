<template>
  <div>
<!--    v-if-->
    输入你的成绩: <input type="text" v-model="score">
    <h3>成绩评价</h3>
<!--    <p v-if="score>=90 && score<=100">优秀</p>-->
<!--    <p v-else-if="score>=80 && score<90">良好</p>-->
<!--    <p v-else-if="score>=70 && score<80">中等</p>-->
<!--    <p v-else-if="score>=60 && score<70">合格</p>-->
<!--    <p v-else-if="score>=0 && score<60">不合格</p>-->
<!--    <p v-else>无效的成绩</p>-->
<!--    v-show-->
    <p v-show="score>=90 && score<=100">优秀</p>
    <p v-show="score>=80 && score<90">良好</p>
    <p v-show="score>=70 && score<80">中等</p>
    <p v-show="score>=60 && score<70">合格</p>
    <p v-show="score>=0 && score<60">不合格</p>
    <p v-show="score<0 || score >100" >无效的成绩</p>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        score: 0
      }
    },

  }

</script>

<style scoped>

</style>
