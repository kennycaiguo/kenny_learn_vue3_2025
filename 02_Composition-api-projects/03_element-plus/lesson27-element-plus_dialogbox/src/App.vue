<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" type="primary" plain @click="dialogFormVisible = true">
      新增岗位
    </el-button>
  </div>

  <el-dialog v-model="dialogFormVisible" title="添加岗位" width="500">
    <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
    >
      <el-form-item label="岗位名称" prop="jobName">
        <el-input v-model="ruleForm.jobName" placeholder="请输入岗位名称"/>
      </el-form-item>
      <el-form-item label="岗位编码" prop="jobCode">
        <el-input v-model="ruleForm.jobCode" placeholder="请输入岗位编码"/>
      </el-form-item>
      <el-form-item label="岗位顺序" prop="sort">
        <el-input-number
            v-model="ruleForm.sort"
            controls-position="right"
            @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="岗位状态" prop="jobStatus">
        <el-radio-group v-model="ruleForm.jobStatus">
          <el-radio v-for="js in jobStatus" :value="js">{{ js }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" placeholder="请输入内容" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确定
        </el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  //表单需要的数据
  import type { FormInstance, FormRules } from 'element-plus'
  //用来扩展对话框的显示或者隐藏
  const dialogFormVisible = ref(false)

  interface RuleForm {
    jobName: string
    jobCode:string
    sort:number
    jobStatus: string
    desc: string
  }

  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    jobName: '',
    jobCode:" ",
    sort: 0,
    jobStatus: '正常',
    desc: '',
  })

  let jobStatus = reactive(["正常","停用"])

  const rules = reactive<FormRules<RuleForm>>({
    jobName: [
      { required: true, message: '请输入岗位名称', trigger: 'blur' },
      { min: 2, max: 20, message: '岗位名称长度在2-20个字符之间', trigger: 'blur' },
    ],
    jobCode: [
      { required: true, message: '请输入岗位编码', trigger: 'blur' },
      { min: 3, max: 10, message: '岗位编码的长度是3-10位', trigger: 'blur' },
    ],
    //不用验证因为有默认值
    // jobStatus: [
    //   {
    //     required: true,
    //     message: '请选择岗位状态',
    //     trigger: 'change',
    //   },
    // ],
     //备注是可以为空的
    // desc: [
    //   { required: true, message: '请输入备注', trigger: 'blur' },
    //   { min: 12, message: '备注必须在12个字以上', trigger: 'blur' },
    // ],
  })
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('提交成功数据是:',ruleForm)
        dialogFormVisible.value = false //用来关闭对话框
      } else {
        console.log('error submit!',fields)
      }
    })
  }
  const handleChange = (value: number | undefined) => {
    console.log(value)
  }

</script>
