import './bootstrap'

import {createApp} from 'vue'

import App from './App.vue'
import router from './router'
import Pagination from '@/components/Pagination.vue'

const app = createApp(App)
app.use(router)
app.component('Pagination', Pagination)
app.mount("#app")
