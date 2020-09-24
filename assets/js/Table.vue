<template>
  <div class="">
    <table-nav
      :project="this.project"
    ></table-nav>
    <nav class="navbar navbar-light bg-light p-2 border">
        <column-add
            v-on:click="addColumn"
        ></column-add>
    </nav>
    <div class="d-flex flex-row justify-content-center">
      <div
          v-for="column in columns"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4 "
      >
          <p class="font-weight-bolder tracking-wide text-sm">{{ column.title }}</p>


        <draggable :list="column.tasks" :animation="200" group="tasks" v-on:change="statusChange($event, column.title)" class="overflow-auto">
          <task-card
              v-for="(task) in column.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move task"
          ></task-card>
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
import TaskCard from "./TaskCard";
import TaskAdd from "./TaskAdd";
import ColumnAdd from "./ColumnAdd";
import TableNav from "./TableNav";
import TaskEdit from "./TaskEdit";
import {eventBus} from "./main";

export default {
  name: "app",
  order: 1,
  components: {
    TaskCard,
    TaskAdd,
    ColumnAdd,
    TableNav,
    TaskEdit,
    draggable
  },
  data() {
    return {
      project: [
        {
          name: "project_name"
        }
      ],
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
      status = data.column;
      let title = data['title'];
      let tag = data['tag'];
      let description = data['description'];
      let column = this.columns.find(columns => columns.title === status);

      let last_id = this.$lastId(this.columns);
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
    },
    editTask(data){
      console.log(data)
      //db query
    },
    deleteTask(data){
      console.log(data['id'])
      let id = data['id'];
      //db query
    }
  },
  created() {
    eventBus.$on('deleteTask', (data) =>{
      this.deleteTask(data);
    })
    eventBus.$on('editTask', (data) => {
      this.editTask(data);
    })
  }
}
</script>
