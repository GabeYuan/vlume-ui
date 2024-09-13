import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VlumeUI from 'vlume-ui'

// 验证打包结果
// import VlumeUI from '../../packages/vlume-ui/dist/index.es.js'
// import '../../packages/vlume-ui/dist/style.css'

const app = createApp(App)
app.use(VlumeUI)
app.mount('#app')
