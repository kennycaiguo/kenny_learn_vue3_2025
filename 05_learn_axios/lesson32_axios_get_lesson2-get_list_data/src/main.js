import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' //引入中文语言包
const app = createApp(App)

app.use(router)
app.use(ElementPlus,{locale:zhCn}) //使用ElementPlus,把中文语言包中文参数
app.mount('#app')
