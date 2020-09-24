import Vue from 'vue'
import App from './Table.vue'

Vue.prototype.$lastId = function lastId(data){
    let list = [];
    data.every(e => e.tasks.every(task => list.push(task.id)));
    return Math.max.apply(null, list)
}



new Vue({
    el: '#table',
    components: {
        'app': App
    },
    render: h => h(App)
});
