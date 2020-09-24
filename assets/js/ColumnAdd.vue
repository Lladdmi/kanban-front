<template><!-- Button trigger modal -->
  <div>
    <button type="button" class="btn-dark" data-toggle="modal" data-target="#add_column">
      New Column
    </button>

    <div class="modal fade" id="add_column" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Dodaj nową kolumnę</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Nazwa</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-secondary" data-dismiss="modal">Anuluj</button>
            <button type="button" class="btn-primary" data-dismiss="modal" @click="addColumn">Dodaj</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      name: ""
    }
  },
  methods: {
    addColumn() {
      let name = this.name;
      this.$emit('click', {name})
    }
  }
}
</script>