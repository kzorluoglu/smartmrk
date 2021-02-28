<template>
  <div v-on:click="editWidgetPage()">
    <div v-html="this.widget.body" v-if="this.widget.component === ''"/>
    <component v-bind:is="componentFile" v-if="this.widget.component"></component>
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
  },
  computed: {
    componentFile() {
      return () => import(`@/${this.widget.component}.vue`);
    }
  }
}
</script>

<style scoped>

</style>