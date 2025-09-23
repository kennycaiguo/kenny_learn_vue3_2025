import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"

const app = createApp(App)

app.use(router)
app.use(ElementPlus) //使用组件库
app.mount('#app')
