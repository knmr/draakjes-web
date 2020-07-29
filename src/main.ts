import Vue from 'vue';
import App from './App.vue';

import { rtdbPlugin } from 'vuefire';

import './styles/app.scss';

Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
