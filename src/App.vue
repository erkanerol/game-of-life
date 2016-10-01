<template>
  <div id="app">
    <my-title></my-title>
    <game-board></game-board>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyTitle from './components/MyTitle'
import MyFooter from './components/MyFooter'
import GameBoard from './components/GameBoard'

export default {
  components: {
    MyTitle, MyFooter, GameBoard
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
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
</style>
