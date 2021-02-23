<template>
  <div class="grid" v-if="widgets.length > 0">
    <widget v-for="widget in widgets"
            :key="widget.id"
            v-bind:widget="widget"
            v-bind:style="widget.genereatedStyle"
            v-bind:class="{gridShowable : isAdmin}"/>
  </div>
</template>

<script>
import Vue from 'vue'
import database from '@/services/database'
import Widget from "@/components/Widget";
export default {
  name: 'Homepage',
  components: { Widget },
  data() {
    return {
      widgets: [],
      isAdmin: Vue.prototype.$isAdmin
    }
  },
  mounted() {
    console.log("test")
  },
  beforeMount() {
    this.widgets = database.get('widgets').value()
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
.girdItemVisible {
  border:1px #f1c40f solid;
}

.new-widget-button {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.fourth {
  border-color: #f1c40f;
  color: #fff;
  background-image: -webkit-linear-gradient(45deg, #f1c40f 50%, transparent 50%);
  background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
}
.fourth:hover {
  background-position: 0;
}
</style>
