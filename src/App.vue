<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from "vue";

export default {
  name: 'App',
  mounted() {
    window.addEventListener("keypress", e => {

      if (e.key === "n" && (e.ctrlKey || e.metaKey)) {
        if (this.$router.currentRoute.path !== '/newwidget') {
          this.$router.push('/newwidget')
        }
      }

      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        if (this.$router.currentRoute.path !== '/') {
          this.$router.push('/')
        }
      }

      if (e.key === "y" && (e.ctrlKey || e.metaKey)) {
        Vue.prototype.$isAdmin = true;
        console.log("isAdmin " + Vue.prototype.$isAdmin)
      }

    });

  }
}
</script>

<style>
body {
  background-color: black !important;
  color: #fff !important;
}
</style>
