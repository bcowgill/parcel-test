import Vue from 'vue/dist/vue.js';
import './styles.scss';
import thing from './facade';
import { that } from './facade';

// must come after import from facade
import App from './app.vue';

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
