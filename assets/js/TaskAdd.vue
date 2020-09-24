<template><!-- Button trigger modal -->
  <div>
    <button type="button" class="btn btn-outline-dark btn-sm" data-toggle="modal" v-bind:data-target="'#'+rmSpaces">
      Dodaj
    </button>

    <div class="modal fade" v-bind:id="rmSpaces" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Dodaj zadanie do kolumny {{column}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Nazwa</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" v-model="title">
              </div>
              <div class="form-group">
                <label for="tag">Tag</label>
                <input type="text" class="form-control" id="tag" v-model="tag">
              </div>
              <div class="form-group">
                <label for="description">Opis</label>
                <textarea id="description" class="form-control" v-model="description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Anuluj</button>
            <button type="button" class="btn btn-outline-primary" data-dismiss="modal" v-on:click="addTask">Dodaj</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    column: {
      type: String
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
    addTask() {
      let self = this;
      this.$emit('click', { column : this.column, title : this.title, description: this.description, tag: this.tag})
    }
  },
  computed: {
    rmSpaces(){
      return this.column.replace(/\s/g, '');;
    }
  }
}
</script>