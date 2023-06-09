import { createApp } from 'vue'
import './style.css'
import router from "../router/routes.js";
import { createPinia } from "pinia";
import App from './App.vue'

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
