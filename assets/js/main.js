import Vue from 'vue'
import App from './Table.vue'

new Vue({
    el: '#table',
    components: {
        'app': App
    },
    render: h => h(App)
});

function test(col) {
    console.log(col);
}
