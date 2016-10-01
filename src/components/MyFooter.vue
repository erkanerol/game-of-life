<template>
  <div>
    <p>{{ msg }} <a v-bind:href="blog">{{user}}</a></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'coded by ',
      user: '@erkanerol',
      blog: 'https://erkanerol.github.io/'
    }
  },
  name: 'my-footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #b90b14;
}
</style>
