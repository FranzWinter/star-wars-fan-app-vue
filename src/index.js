import './js_modules/favicons.js';
import Vue from 'vue';
import App from './App.vue';

import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import './style/style.scss';

// Check if service Worker is correctly registered
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// Check if this is production or develop mode
if (process.env.NODE_ENV !== 'production') {
    console.log('We are in development mode now...');
}
else {
    console.log('We are in production mode now...');
}

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})


