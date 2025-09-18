<template>
  <div>
     <div  style="width:250px;height: 350px" :class="divStyle">
       <h2 :class="titleStyle">{{user.isMember?"尊贵会员" : "普通用户"}}</h2>
       <p>姓名:{{user.name}}</p>
       <p>年龄:{{user.age}}</p>
       <p>职业:{{user.job}}</p>
       <span>爱好:</span>
       <ul>
         <li v-for="h in user.hobbies">{{h}}</li>
       </ul>
       <button :class="btnStyle" @click="memberProcess">{{user.isMember?"取消会员" : "升级会员"}}</button>
     </div>

  </div>
</template>

<script setup>
 import {ref,computed} from "vue";
 // let isMember = ref(false)
 let user = ref(
   {
     name:"Jack",
     age:28,
     job:"前端工程师",
     hobbies:['编程','游泳','阅读'],
     isMember:false
   }
 )
 //div的样式,这里是计算属性
 let divStyle = computed(()=>{
     return user.value.isMember.value? "memberDiv" : "normalDiv"
 })
 //会员标题样式,也是计算属性
 let titleStyle = computed(()=>{
   return user.value.isMember? "memberTitle" : ""
 })

 //不同的按钮属性,还是计算属性
 let btnStyle = computed(()=>{
   return user.value.isMember? "cancelBtn" : "upgradeBtn"
 })
 let memberProcess = ()=>{
   if(user.value.isMember){
     user.value.isMember = false
   }else{
     user.value.isMember = true
   }
 }

</script>

<style scoped>
    .normalDiv{
      border: 1px solid #f2f2f2;
      background-color: #f8f8f8;
      padding: 15px;
      border-radius: 5px;
    }
    .memberDiv{
      border: 1px solid orange;
      background-color: lightyellow;
      padding: 15px;
      border-radius: 5px;
    }
    .memberTitle{
      color:gold;
    }

    .cancelBtn{
      border: none;
      background-color: #ea4b4b;
      color:white;
      border-radius: 5px;
      padding: 5px;
      cursor:pointer;
    }
    .upgradeBtn{
      border: none;
      background-color: #67ea94;
      color:white;
      border-radius: 5px;
      padding: 5px;
      cursor:pointer;
    }

</style>
