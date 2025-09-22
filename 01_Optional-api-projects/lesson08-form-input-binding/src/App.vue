<template>
  <div>
    单向数据绑定: <input type="text" :value="msg">
    双向数据绑定:<input type="text" v-model="msg">
    <div id="info">{{msg}}</div>
    <hr>
    <textarea v-model="linesMsg" placeholder="请输入多行文本" style="width: 300px;height: 120px;resize: none"></textarea>
    <h3>文本域输入的内容</h3>
    <p>{{linesMsg}}</p>
    <hr>
    <h3>单个复选框</h3>
    会游泳:<input type="checkbox" v-model="checked">
    <hr>
    <h3>多个复选框,可以绑定到一个数组,这个需要注意</h3>
    Java:<input type="checkbox" v-model="checkedLangs" value="Java"> Cpp:<input type="checkbox" v-model="checkedLangs" value="C++">
    Python:<input type="checkbox" v-model="checkedLangs" value="Python"> Js:<input type="checkbox" v-model="checkedLangs" value="Javascript"><br>
    <span>Selections:{{checkedLangs.length>0?checkedLangs.join(","):""}}</span>

    <br>
    <hr>
    <label>
      <input type="radio" name="gender" value="男" v-model="sex">男
    </label>
    <label>
      <input type="radio" name="gender" value="女" v-model="sex">女
    </label> <br>
    <span>性别:{{sex}}</span>

    <hr>
    <h3>请选择你喜欢的水果</h3>
    <select  v-model="selected">
      <option disabled value="">请选择</option>
      <option>Apple</option>
      <option>Cherry</option>
      <option>Watermelon</option>
    </select> <br>
    <p>选中的项: {{selected}}</p>
    <hr>
    <h3>请选择你的爱好</h3>
    <select multiple v-model="hobbies">
      <option>打球</option>
      <option>游泳</option>
      <option>跑步</option>
      <option>看书</option>
    </select>
    <p>你的爱好: {{hobbies.length?hobbies.join(","):""}}</p>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        msg: "Hello Vue",
        linesMsg: "",
        checked:true,
        checkedLangs:[],
        sex:"",
        selected:" ",
        hobbies:[]
      }
    },
    methods: {
      name() {

      }
    },
  }

</script>

<style scoped>

</style>
