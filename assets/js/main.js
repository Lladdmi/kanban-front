import Vue from 'vue'
import App from './Table.vue'

Vue.prototype.$group = function group(array, key){
    const result = {}
    array.forEach(item => {
        if (!result[item[key]]){
            result[item[key]] = []
        }
        result[item[key]].push(item)
    })
    return result
}

Vue.prototype.$taskData = function taskData(id){
    return document.querySelectorAll(`[data-id='${id}']`);
}

new Vue({
    el: '#table',
    components: {
        'app': App
    },
    render: h => h(App)
});
