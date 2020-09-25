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
    <div class="d-flex flex-row justify-content-center tasks">
      <div
          v-for="column in columns"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4 "
      >
        <div id="column_data">
          <span class="small">Liczba zadań: {{column.tasks.length}}</span>
        </div>
        <div class="column-title">
          <p class="font-weight-bolder tracking-wide text-sm column-title" v-on:click="editColumnTitle(column.id)">
            {{ column.title }}
          </p>
          <div v-bind:id="'column-'+column.id" style="display: none" class="form-inline align-middle">
            <div><input type="text" v-bind:value="column.title" v-bind:placeholder="column.title"></div>
            <div class="btn-group ml-1">
              <button class="btn btn-outline-dark btn-sm" v-on:click="saveColumnTitle(column.title, column.id)"><i
                  class="fas fa-check"></i></button>
              <button class="btn btn-outline-dark btn-sm" v-on:click="cancelColumnEdit(column.id)"><i
                  class="fas fa-times"></i></button>
            </div>
          </div>
        </div>

        <draggable :list="column.tasks" :animation="200" group="tasks" v-on:change="statusChange($event, column.title)" class="">
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
          id: 1,
          title: "Backlog",
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              date: "Sep 14",
              type: "Feature Request",
              user_id: 1
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
          id: 2,
          title: "In Progress",
          tasks: [
            {
              id: 6,
              title: "Design shopping cart dropdown",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              description: "",
              date: "Sep 14",
              type: "Feature Request",
              user_id: 1
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              date: "Sep 12",
              type: "Backend",
            }
          ]
        },
        {
          id: 3,
          title: "Review",
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              description: "",
              date: "Sep 12",
              user_id: 1
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
          id: 4,
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
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              date: "Sep 14",
              type: "Feature Request",
              user_id: 1
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
        for (let column of this.columns) {
          let index = 0;
          for (let task of column.tasks) {
            if(task.id === data['id']){
              console.log(index)
              this.$delete(column.tasks, index)
              break;
            }
            index++
          }
        }

      console.log(data['id'])
      let id = data['id'];
      //db query
    },
    editColumnTitle(id){
      this.$editColumnTitle(id)
    },
    saveColumnTitle(title, id){
      let new_title = this.$saveColumnTitle(id)
      this.$set(this.columns.find(columns => columns.id === id), 'title', new_title)
      console.log({title: new_title, col_id: id});
    },
    cancelColumnEdit(id){
      this.$cancelColumnEdit(id)
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
