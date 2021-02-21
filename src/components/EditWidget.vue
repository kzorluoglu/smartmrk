<template>
  <div class="editWidget card float-right">
    <div class="card-header">
      <button class="btn btn-warning" v-on:click="closeEditWidget"> x</button>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <div class="alert alert-secondary" role="alert" v-if="newWidget">
            Create your first Widget!
          </div>
        </div>
      </div>

      <div class="row">
        <div class="grid position-row">
          <div>Row</div>
          <div>
            <label for="rowStart" class="form-label">Start Position: {{ rowStart }}</label>
            <input type="range" class="form-range" id="rowStart" min="1" max="12" step="1" v-model="rowStart">
           </div>
          <div>
            <label for="rowEnd" class="form-label">End Position: {{ rowEnd }}</label>
            <input type="range" class="form-range" id="rowEnd" min="1" max="12" step="1" v-model="rowEnd">
          </div>
          <div>Column</div>
          <div>
            <label for="columnStart" class="form-label">Start Position: {{ columnStart }}</label>
            <input type="range" class="form-range" id="columnStart" min="1" max="12" step="1" v-model="columnStart">
          </div>
          <div>
            <label for="columnEnd" class="form-label">End Position: {{ columnEnd }}</label>
            <input type="range" class="form-range" id="columnEnd" min="1" max="12" step="1" v-model="columnEnd">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <textarea ref="rawBody" class="form-control" v-model="rawBody" placeholder="Write your Text or HTML Code"></textarea><br>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-primary" v-on:click="updateWidget">
              <span>Save</span>
            </button>
          </div>
        </div>


      </div>
    </div>
    <div class="card-footer text-muted">
      smartMRK OS - v.0.1
    </div>
  </div>
</template>

<script>
import database from '@/services/database'

export default {
  name: "EditWidget",
  props: {
    id: null,
    newWidget: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      max: 12,
      min: 1,
      widget: 0,
      rowStart: 0,
      rowEnd: 0,
      columnStart: 0,
      columnEnd: 0,
      rawBody: ""
    }
  },
  beforeMount() {
    if (this.newWidget == false) {
      this.widget = database.get('widgets').getById(this.id).value();
      this.rawBody = this.widget.body;
      this.rowStart = parseInt(this.widget.rowStart);
      this.rowEnd = parseInt(this.widget.rowEnd);
      this.columnStart = parseInt(this.widget.columnStart);
      this.columnEnd = parseInt(this.widget.columnEnd);
    }
  },
  methods: {
    updateWidget() {

      if (this.newWidget == false) {
        database.get('widgets').getById(this.widget.id).assign({
          "rowStart": this.rowStart,
          "rowEnd": this.rowEnd,
          "columnStart": this.columnStart,
          "columnEnd": this.columnEnd,
          "body": this.rawBody,
          "isEditing": false,
          "genereatedStyle": `
              grid-row-start:${this.rowStart};
              grid-row-end:${this.rowEnd};
              grid-column-start:${this.columnStart};
              grid-column-end:${this.columnEnd};`
        }).write()
      }

      if (this.newWidget == true) {
        database.get('widgets').insert({
          "rowStart": this.rowStart,
          "rowEnd": this.rowEnd,
          "columnStart": this.columnStart,
          "columnEnd": this.columnEnd,
          "body": this.rawBody,
          "isEditing": false,
          "genereatedStyle": `
              grid-row-start:${this.rowStart};
              grid-row-end:${this.rowEnd};
              grid-column-start:${this.columnStart};
              grid-column-end:${this.columnEnd};`
        }).write()

      }
    },
    closeEditWidget() {
      this.widget.isEditing = false;
    }
  }
}
</script>

<style scoped>
.editWidget {
  width: 75%;
  height: 75%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.99;
  color: #000;
}

.grid {
  display: grid;
  padding: 1rem;
  margin: 1rem;
}

.position-row {
  grid-template-columns: 1fr 1fr 1fr  1fr 1fr 1fr;
  grid-gap: 20px;
}

</style>