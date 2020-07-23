import Vue from 'vue/dist/vue.js';
import './styles.scss';
import App from './app.vue';

import thing from './facade';
import { that } from './facade';

console.log(`vue. The ${thing} is, I am ${that} guy!`);

const app = window.addEventListener(
	'load', () => {
		new Vue({
			el: '#vueapp',
			name: App,
			components: { App},
			template: `<App />`
		})
	});

export default app;
