<template>
  <div class="">
<!--    <button slot="footer" @click="addColumn" class="btn-dark">New column</button>-->
    <column-add
      v-on:click="addColumn"
    ></column-add>
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
              v-on:click="addTask"
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
import TaskAdd from "./TaskAdd.vue";
import ColumnAdd from "./ColumnAdd.vue";

export default {
  name: "app",
  order: 1,
  components: {
    TaskCard,
    TaskAdd,
    ColumnAdd,
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
              description: "s",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              description: "",
              date: "Sep 12"
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              description: "",
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
              description: "",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              description: "",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              description: "",
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
              description: "",
              date: "Sep 12"
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              description: "",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 11,
              title: "Add discount code to checkout page",
              description: "",
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
              description: "",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 15,
              title: "Design shopping cart dropdown",
              description: "",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              description: "",
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
      //db call
    },
    addTask(data){
      console.log(data);
      status = data['column'];
      let title = data['title'];
      let tag = data['tag'];
      let description = data['description'];
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
        title: title,
        description: description,
        date: "Sep 14",
        type: tag
      })
    },
    addColumn(data){
      this.columns.push({title: data['name'], tasks: []})
    }
  },
  computed: {
    group() {
      return this.$group(this.list, 'status')
    }
  }
}
</script>
