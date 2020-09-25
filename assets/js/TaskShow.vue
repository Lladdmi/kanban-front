<template>
    <div class="modal fade" v-bind:id="'task_id-'+task.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div class="d-flex align-items-center">
              <h4 class="modal-title p-2" id="exampleModalLabel">{{ task.title }}</h4>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-0 list-group" style="font-size: 1.3em">

            <div class="list-group-item pt-4 pb-4">
              <div class="d-flex align-items-center pb-1">
                <i class="fas fa-align-left fa-lg"></i>
                <h5 class="font-weight-bold pl-3" style="font-size: 1.3em">Opis</h5>
              </div>
              <div class="font-weight-normal pl-5">{{ task.description }}</div>
            </div>

            <div class="list-group-item">
              <div class="d-flex align-items-center pb-1">
                new
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" ></button>
            <button type="button" class="btn btn-outline-primary" data-dismiss="modal"></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object
    }
  }
}

</script>