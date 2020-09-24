<template>
  <div class="card border-dark mb-3 small d-flex" style="max-width: 18rem; border-radius: 0">
    <div class="p-0 card-header bg-light font-weight-bold d-flex">
      <div class="p-3">{{ task.title }}</div>
      <button type="button" class="pl-2 pr-2 ml-auto mt-0 border-0 bg-light dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-ellipsis-v"></i>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <task-edit
          :task="task"
      ></task-edit>
          <ul class="dropdown-menu" role="menu">
            <li>
              <button type="button" class="dropdown-item" v-on:click="deleteTask(task.id)">Usuń</button>
<!--              <task-edit-->
<!--                  :task="task"-->
<!--              ></task-edit>-->
            </li>
          </ul>

    </div>
    <div class="card-body p-3">
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
export default {
  components:{
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
    }
  }
};
</script>
