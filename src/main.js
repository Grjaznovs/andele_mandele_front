import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap"

import Modal from "@/components/common/modalwindow.vue";

const app = createApp(App)

app.config.globalProperties.BASE_API_URL = import.meta.env.VITE_BASE_API_URL

app.component('Modal', Modal);
app.use(router)

app.mount('#app')
