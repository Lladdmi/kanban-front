<template>
  <div class="">
    <button slot="footer" @click="addColumn('')" class="btn-dark">New column</button>
    <div class="d-flex flex-row justify-content-center">

      <div
          v-for="column in columns"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4 "
      >
        <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ column.title }}</p>
        <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
        <draggable :list="column.tasks" :animation="200" ghost-class="ghost-card" group="tasks" @change="statusChange($event, column.title)">
          <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
          <task-card
              v-for="(task) in column.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move task"
          ></task-card>
          <!-- </transition-group> -->
          <task-add
              v-on:click="addTask(column.title, '', '')"
              :column="column.title"
          ></task-add>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";
import TaskAdd from "./TaskAdd.vue"

export default {
  name: "app",
  order: 1,
  components: {
    TaskCard,
    TaskAdd,
    draggable
  },
  data() {
    return {
      columns: [
        {
          title: "Backlog",
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12"
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            }
          ]
        },
        {
          title: "In Progress",
          tasks: [
            {
              id: 6,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend"
            }
          ]
        },
        {
          title: "Review",
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12"
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 11,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        },
        {
          title: "Done",
          tasks: [
            {
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 15,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        }
      ]
    };
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    statusChange(event, col) {
      console.log(col, event);
    },
    findColumns(){

    },
    addTask(status, name, tag){
      console.log(status, name, tag)
      let last_id = 1;
      let column = this.columns.find(columns => columns.title === status);

      for (let task of this.columns) {
        for (let item of task.tasks) {
          last_id < item.id ? last_id = item.id : false
        }
      }
      last_id++;
      column.tasks.push({
        id: last_id,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request"
      })
    },
    addColumn(name){
      this.columns.push({title: "new", tasks: []})
    }
  },
  computed: {
    group() {
      return this.$group(this.list, 'status')
    }
  }
}
</script>
