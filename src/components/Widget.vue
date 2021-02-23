<template>
  <div v-on:click="editWidgetPage()">
    <div v-html="this.widget.body"/>
  </div>
</template>

<script>

export default {
  name: "Widget",
  props: {
    widget: null
  },
  methods: {
    editWidgetPage: function () {
      this.$router.push({ path: `/editwidget/${this.widget.id}`})
    }
  }
}
</script>

<style scoped>

</style>