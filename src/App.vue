<template>
  <div id="app">
    <my-title></my-title>
    <p>
      Welcome to your Vue.js app!
    </p>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyTitle from './components/MyTitle'
import MyFooter from './components/MyFooter'

export default {
  components: {
    MyTitle, MyFooter
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
</style>
