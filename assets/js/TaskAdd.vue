<template><!-- Button trigger modal -->
  <div>
    <button type="button" class="btn-dark" data-toggle="modal" data-target="#exampleModalCenter" v-bind:data-target="'#'+rmSpaces">
      New task
    </button>

    <div class="modal fade" v-bind:id="rmSpaces" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addTask">Save changes</button>
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
  methods: {
    addTask() {
      this.$emit('click')
    }
  },
  computed: {
    rmSpaces(){
      return this.column.replace(/\s/g, '');;
    }
  }
}
</script>