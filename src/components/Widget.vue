<template>
  <div>
    <edit-widget v-bind:id="widget.id" v-show="widget.isEditing"/>
    <div class="grid-item" v-html="renderedBody"
         v-on:click="toggleEditMode()"/>
  </div>
</template>

<script>
import EditWidget from "@/components/EditWidget";

export default {
  name: "Widget",
  components: {EditWidget},
  props: {
    widget: null
  },
  data() {
    return {
      renderedBody: null
    }
  },
  mounted() {
    this.renderedBody = this.widget.body;
  },
  methods: {
    toggleEditMode: function () {
      this.widget.isEditing = true;
    }
  }
}
</script>

<style scoped>

</style>