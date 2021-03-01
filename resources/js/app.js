require('./bootstrap');

window.Vue = require('vue');

import router from './routes/router';
import store from './vuex/store';


/**
 * Global Components
 */



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('admin-component', require('./components/backend/AdminComponent').default)




const app = new Vue({
    router,
    store,
    el: '#app'
});
