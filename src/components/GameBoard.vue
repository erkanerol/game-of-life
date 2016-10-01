<template>
  <div>
    <div class="game-panel">
        <div class="row" v-for="(row, rowIndex) in game.matrix">
          <div class="cell" v-for="(cell, columnIndex) in row"
              v-bind:class="{ live: cell , death: !cell }"
              v-on:click="myclick(rowIndex,columnIndex)">
          </div>
        </div>
        <button id="next" v-on:click="next" :disabled="isPlaying">Next</button>
        <button id="start" v-on:click="start" :disabled="isPlaying">Start</button>
        <button id="stop" v-on:click="stop" :disabled="!isPlaying">Stop</button>
        <br/>

        <button id="deleteColumn" v-on:click="deleteColumn" :disabled="isPlaying">-</button>
        <p>Column</p>
        <button id="addColumn" v-on:click="addColumn" :disabled="isPlaying">+</button>


      <br/>

      <button id="deleteRow" v-on:click="deleteRow" :disabled="isPlaying">-</button>
      <p>Row</p>
      <button id="addRow" v-on:click="addRow" :disabled="isPlaying">+</button>

    </div>
  </div>
</template>

<script>
import {Game} from '../game.js'
import Vue from 'vue'

export default {
  data () {
    return {
      msg: 'Game Board',
      game: new Game(5, 5),
      isPlaying: false
    }
  },
  methods: {
    myclick: function (rowIndex, columnIndex) {
      Vue.set(this.game.matrix[rowIndex], columnIndex, 1 - this.game.matrix[rowIndex][columnIndex])
    },
    next: function () {
      Vue.set(this.game, 'matrix', this.game.next())
    },
    addColumn: function () {
      this.game.addColumn()
    },
    addRow: function () {
      this.game.addRow()
    },
    deleteColumn: function () {
      this.game.deleteColumn()
    },
    deleteRow: function () {
      this.game.deleteRow()
    },
    start: function () {
      this.isPlaying = true
      this.loop()
    },
    loop: function () {
      if (this.isPlaying) {
        this.next()
        setTimeout(this.loop, 1000)
      }
    },
    stop: function () {
      this.isPlaying = false
    }
  },
  name: 'game-board'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  display: inline;
}
.row {
  display: block;
}

.cell{
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 2px;
}
.live{
  background: #233f8f;
}

.death{
  background: #ccde44;
}

#next{
  width: 50px;
  height: 20px;
}
</style>
