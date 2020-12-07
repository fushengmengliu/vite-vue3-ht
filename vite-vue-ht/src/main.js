import {createApp} from 'vue'
import App from './App.vue'
import routers from "./routers"
import './index.css'
import Element from "element-plus"
import "element-plus/lib/theme-chalk/index.css"

createApp(App).use(Element).use(routers).mount('#app')
