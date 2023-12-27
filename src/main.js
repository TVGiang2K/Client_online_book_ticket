import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery';
import VueAxios from 'vue-axios'
import axios from 'axios'
import Swal from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App).use(router)

app.use(VueAxios, {$request: axios})
app.use(Swal)

app.mount('#app')
