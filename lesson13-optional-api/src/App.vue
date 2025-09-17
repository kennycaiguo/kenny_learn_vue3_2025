<template>
  <div class="box">
    <table>
      <caption>
        <h2>学生信息列表</h2>
      </caption>
      <thead>
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>爱好</th>
      </tr>
      </thead>
      <tbody>
         <tr v-for="stu in students" :key="stu.id">
           <td>{{stu.id}}</td>
           <td>{{stu.name}}</td>
           <td>{{stu.age}}</td>
           <td>{{stu.gender}}</td>
           <td>{{stu.hobbies.join(',')}}</td>
         </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

  export  default {
    data() {
      return {
        students: [
          {
            id:1001,
            name:"Jack",
            age:18,
            gender:"male",
            hobbies:["读书","爬山","跑步"]
          },
          {
            id:1002,
            name:"Mark",
            age:18,
            gender:"male",
            hobbies:["读书","爬山","跑步"]
          },
          {
            id:1003,
            name:"Linda",
            age:18,
            gender:"female",
            hobbies:["游泳","跳舞","跑步"]
          },
          {
            id:1004,
            name:"Tracy",
            age:18,
            gender:"female",
            hobbies:["读书","听音乐","打王者"]
          },
        ]

      }
    },

  }

</script>

<style scoped>
   table{
     border: 1px solid #282828;
     border-collapse: collapse;
     width: 800px;
   }
   th,td{
     border: 1px solid #f2f2f2;
     padding: 8px;
   }

   .box{
     width: 820px;
     margin: 80px auto;
   }
</style>
