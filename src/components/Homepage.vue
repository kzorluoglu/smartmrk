<template>
  <div class="grid" v-if="widgets.length > 0">
    <widget v-for="widget in widgets" :key="widget.id" v-bind:widget="widget" v-bind:style="widget.genereatedStyle" />
  </div>
  <div class="no-widget-found" v-else>
    <edit-widget v-bind:newWidget="true"></edit-widget>
  </div>
</template>

<script>
import database from '@/services/database'
import Widget from "@/components/Widget";
import EditWidget from "@/components/EditWidget";

export default {
  name: 'Homepage',
  components: {EditWidget, Widget},
  data() {
    return {
      widgets: []
    }
  },
  beforeMount() {
    this.widgets = database.get('widgets').value()
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 3fr);
  grid-template-rows: repeat(12, [col-start] 3fr);
  grid-column-gap: 1rem;
  height: 100vh;
}
.no-widget-found {

}
</style>
