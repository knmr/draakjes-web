import Vue from 'vue';
import App from './App.vue';

import './styles/app.scss';

//FontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// //library.add(faDiscord);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
