import Vue from 'vue'
import App from './table.vue'

new Vue({
    el: '#table',
    components: {
        'app': App
    },
    render: h => h(App)
});
