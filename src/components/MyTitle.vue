<template>
  <div class="mytitle">
     <h1>{{ msg }}</h1>
  </div>
</template>



<script>
export default {
  data () {
    return {
      msg: 'Conway\'s Game of Life Simulation'
    }
  },
  name: 'my-title'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
