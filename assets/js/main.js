import Vue from 'vue'
import App from './Table.vue'

Vue.prototype.$lastId = function (data){
    let list = [];
    data.every(e => e.tasks.every(task => list.push(task.id)));
    return Math.max.apply(null, list)
}

Vue.prototype.$deleteTask = function (id) {
    $('.tasks').find(`[data-task_id='${id}']`).fadeOut(function (){
        $(this).remove()
    })
}

Vue.prototype.$editColumnTitle = function (id) {
    console.log(id)
    let column = $(`#column-${id}`)
    column.show()
    column.siblings().hide()
}

Vue.prototype.$saveColumnTitle = function (id) {
    let column = $(`#column-${id}`);
    column.parent().find(".column-title").show();
    column.hide();
    return $(`#column-${id} input`).val();
}

Vue.prototype.$cancelColumnEdit = function (id) {
    let column = $(`#column-${id}`);
    column.hide()
    column.parent().find('.column-title').show()
}

export const eventBus = new Vue();

new Vue({
    el: '#table',
    components: {
        'app': App
    },
    render: h => h(App)
});
