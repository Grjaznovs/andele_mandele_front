import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap"

import Modal from "@/components/common/modalwindow.vue";
import BasicHelper from "@/helpers/BasicHelper.js";
import spinner from "@/components/common/spinner.vue";

const app = createApp(App)

app.config.globalProperties.BASE_API_URL = import.meta.env.VITE_BASE_API_URL
app.config.globalProperties.BasicHelper = BasicHelper;

app.component('Modal', Modal);
app.component('spinner', spinner);

app.use(router)

app.mount('#app')
