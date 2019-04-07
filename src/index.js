import './js_modules/favicons.js';
import Vue from 'vue';
import App from './App.vue';

import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import './style/style.scss';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})


