<template>
  <h1 class="title">用户注册</h1>
  <el-form
      ref="ruleFormRef"
      style="max-width: 550px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="regForm"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="ruleForm.userName" />
    </el-form-item>
    <el-form-item label="密 码" prop="password">
      <el-input v-model="ruleForm.password" type="password"/>
    </el-form-item>
    <el-form-item label="学历" prop="edu">
      <el-select v-model="ruleForm.edu" placeholder="选择学历">
        <el-option v-for="edu in edus" :value="edu" />
      </el-select>
    </el-form-item>
    <el-form-item label="出生日期" required>
      <el-form-item prop="birthday">
        <el-date-picker
            v-model="ruleForm.birthday"
            type="date"
            aria-label="选择出生日期"
            placeholder="选择出生日期"
            style="width: 100%"
        />
      </el-form-item>
    </el-form-item>

    <el-form-item label="兴趣爱好" prop="hobbies">
      <el-checkbox-group v-model="ruleForm.hobbies">
        <el-checkbox v-for="h in hobbies" :value="h" name="type">
          {{h}}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-radio-group v-model="ruleForm.gender">
        <el-radio v-for="g in genders" :value="g">{{g}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="个人简介" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="记住密码" prop="remember">
      <el-switch v-model="ruleForm.remember" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        注册
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  userName: string
  password:string
  edu: string
  birthday: string
  remember: boolean
  hobbies: string[]
  gender: string
  desc: string
}
 //响应式学历数组
let edus = reactive(["初中","高中","大专","本科以上"])
//兴趣爱好数组
let hobbies = reactive(["篮球","足球",'羽毛球','乒乓球','游泳',"看书",'爬山',"打游戏","学编程","聊天"])
//性别数组
let genders = reactive(['男',"女","保密"])

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  userName: 'Hello',
  password:'',
  edu: '',
  birthday: '',
  remember: false,
  hobbies: [],
  gender: '',
  desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
  userName: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    { min: 2, max: 5, message: '姓名必须是2-5位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 12, message: '密码必须是6-12位', trigger: 'blur' },
  ],
  edu: [
    {
      required: true,
      message: '请选择你的学历',
      trigger: 'change',
    },
  ],
  birthday: [
    {
      type: 'date',
      required: true,
      message: '请选择出生日期',
      trigger: 'change',
    },
  ],

  hobbies: [
    {
      type: 'array',
      required: true,
      message: '请选择至少一个兴趣爱好',
      trigger: 'change',
    },
  ],
  gender: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: '请填写个人简介', trigger: 'blur' },
    {min:10,max:200, message: '个人简介的长度是10-200个字符', trigger: 'blur'}
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }))
</script>

<style scoped>
   .regForm{
     margin: 10px auto;
   }
   .title{
     text-align: center;
   }
</style>