import CUI from '../../src/index.js';
import { createApp } from 'vue';
console.log(CUI.name, CUI.version);
import '../../src/styles/reset.scss';
import '../../src/styles/index.scss';
import App from './app.vue';
createApp(App).use(CUI).mount('#app');
