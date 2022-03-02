import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/router/permission';

import '@/styles/index.scss';

const app = createApp(App);
app.use(router);

// import * as Icons from '@element-plus/icons-vue';
// Object.keys(Icons).forEach(key => app.component(key, Icons[key]));

app.mount('#app');
