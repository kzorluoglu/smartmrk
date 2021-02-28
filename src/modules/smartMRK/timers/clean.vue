<template>
<div class="clock">
  <p class="date">{{ date }}</p>
  <p class="time">{{ time }}</p>
</div>
</template>

<script>
/**
 * Special Thanks
 * https://github.com/eddyerburgh/vue-digital-clock/blob/master/src/Clock.vue
 * https://codepen.io/gau/pen/LjQwGp
 */

export default {
name: "clean",
  data(){
    return {
      interval: null,
      time:  '',
      date: ''
    }
  },
  created() {
    this.interval = setInterval(() => {
      let nowDate = new Date();
      let hour = this.padZero(nowDate.getHours(), 2)
      let minute = this.padZero(nowDate.getMinutes(), 2)
      let second = this.padZero(nowDate.getSeconds(), 2)
      this.time = `${hour} : ${minute} : ${second}`

      let year = nowDate.getFullYear()
      let month = this.padZero(nowDate.getMonth())
      let dayDate = this.padZero(nowDate.getDate())
      let day = this.padZero(nowDate.getDay())
      this.date = `${year}-${month}-${dayDate} ${day}`
    })
  },
  methods: {
    padZero(num){
      if(num < 10) {
        return "0" + num;
      }
      return num;
    }
  }
}
</script>

<style scoped>
.clock {
  padding-top: 2rem;
  padding-left: 1rem;
  text-align: center;
  position: absolute;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
}
.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>