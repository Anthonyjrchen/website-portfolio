import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
app.config.errorHandler = () => null;
app.config.warnHandler = () => null;
app.use(router)

app.mount('#app')
