import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

import './assets/font-awesome-4.7.0/css/font-awesome.css';
import './assets/css/bootstrap.min.css';
import './assets/css/tooplate-style.css';



app.use(router)

app.mount('#app')
