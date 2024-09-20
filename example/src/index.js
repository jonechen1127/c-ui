import CUI from '~/index.js';
import { createApp } from 'vue';
console.log(CUI.name, CUI.version);
import '~/styles/reset.scss';
import '~/styles/index.scss';
import App from './app.vue';
createApp(App).use(CUI).mount('#app');
