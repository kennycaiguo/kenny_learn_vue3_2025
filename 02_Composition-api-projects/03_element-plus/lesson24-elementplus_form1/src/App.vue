<template>
  <h1 style="text-align: center">用户注册</h1>
  <el-form :model="form" label-width="auto" style="max-width: 600px;" class="myForm">
    <el-form-item label="用户名">
      <el-input v-model="form.userName" />
    </el-form-item>
    <el-form-item label="密  码">
      <el-input type="password"  v-model="form.passWord" />
    </el-form-item>
    <el-form-item label="学历">
<!--      <el-select v-model="form.edu" placeholder="请选择你的学历">-->
<!--        <el-option label="本科以上" value="本科以上" />-->
<!--        <el-option label="大专" value="大专" />-->
<!--        <el-option label="高中" value="高中" />-->
<!--        <el-option label="中专" value="中专" />-->
<!--        <el-option label="初中" value="初中" />-->
<!--      </el-select>-->
      <el-select v-model="form.edu" placeholder="请选择你的学历">
        <!--  可以使用v-for来遍历我们的数组来生成option value需要动态绑定-->
        <el-option v-for="edu in edus" :value="edu" />
      </el-select>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择出生日期"
          style="width: 100%"
      />
    </el-form-item>

    <el-form-item label="兴趣爱好">
      <el-checkbox-group v-model="form.hobbies">
        <el-checkbox value="爬山" name="hobbies">
          爬山
        </el-checkbox>
        <el-checkbox value="游泳" name="hobbies">
          游泳
        </el-checkbox>
        <el-checkbox value="看电影" name="hobbies">
          看电影
        </el-checkbox>
        <el-checkbox value="泡妞" name="hobbies">
          泡妞
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.gender">
        <el-radio value="男">男</el-radio>
        <el-radio value="女">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="个人简介">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="记住密码">
      <el-switch v-model="form.remember" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">注册</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  {{form}}
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  userName: '',
  passWord:"",
  edu: '',
  birthday: '',
  remember: false,
  hobbies: [],
  gender: '',
  desc: '',
})

let edus = reactive(["初中","高中","大专","本科以上"])

const onSubmit = () => {
  console.log('submit!',form)
}

</script>

<style scoped>
  .myForm{
    border: 2px dashed deeppink;
    padding:20px;
    margin: 10px auto;
  }
</style>
