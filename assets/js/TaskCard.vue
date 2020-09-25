<template>
  <div class="card border-dark mb-3 small d-flex" style="max-width: 18rem; border-radius: 0" v-bind:data-task_id="task.id">
    <div class="p-0 card-header bg-light font-weight-bold d-flex">
      <task-show
        :task="task"
      ></task-show>
      <button class="p-3 border-0 bg-light flex-fill text-left font-weight-bold"
              data-toggle="modal" v-bind:data-target="'#task_id-'+task.id" style="cursor: pointer"
      >{{ task.title }}</button>
      <button type="button" class="pl-2 pr-2 mt-0 border-0 bg-light dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-ellipsis-v"></i>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
          <div class="dropdown-menu" role="menu">
            <button type="button" class="dropdown-item  btn btn-outline-light" data-toggle="modal" v-bind:data-target="'#id_'+task.id">Edytuj</button>
            <button type="button" class="dropdown-item btn btn-outline-light" v-on:click="deleteTask(task.id)">Usuń</button>
          </div>
      <task-edit :task="task"></task-edit>
    </div>
    <div class="card-body p-3 d-flex">
      <p class="card-text">{{task.description}}</p>
    </div>
    <div class="card-footer bg-transparent">
      <div class="d-flex">
        <div>{{ task.date }}</div>
        <div class="ml-auto"><span class="badge badge-dark font-weight-normal" style="font-size: 1em; padding: 5px">{{ task.type }}</span></div>
      </div>
    </div>
  </div>
</template>
<script>

import TaskEdit from "./TaskEdit";
import {eventBus} from "./main";
import TaskShow from "./TaskShow";
export default {
  components:{
    TaskShow,
      TaskEdit
  },
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    deleteTask(id) {
      eventBus.$emit('deleteTask', {id})
      this.$deleteTask(id);
    }
  }
};
</script>
