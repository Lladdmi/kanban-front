<template><!-- Button trigger modal -->
  <div>
    <button type="button" class="dropdown-item" data-toggle="modal" v-bind:data-target="'#id_'+task.id">Edytuj</button>
    <div class="modal fade" v-bind:id="'id_'+task.id" tabindex="1" role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Edytuj zadanie</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Nazwa</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" v-model="task.title">
              </div>
              <div class="form-group">
                <label for="tag">Tag</label>
                <input type="text" class="form-control" id="tag" v-model="task.type">
              </div>
              <div class="form-group">
                <label for="description">Opis</label>
                <textarea id="description" class="form-control" v-model="task.description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Anuluj</button>
            <button type="button" class="btn btn-outline-primary" data-dismiss="modal" @click="editTask">Edytuj</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      title: "",
      tag: "",
      description: ""
    }
  },
  methods: {
    editTask() {
      let self = this;
      this.$emit('click', { title : this.title, description : this.description, tag : this.tag})
    }
  }
}
</script>