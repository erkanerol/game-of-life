<template>
  <div>
    <div class="game-panel">
        <div class="row" v-for="(row, rowIndex) in game.matrix">
          <div class="cell" v-for="(cell, columnIndex) in row"
              v-bind:class="{ live: cell , death: !cell }"
              v-on:click="myclick(rowIndex,columnIndex)">
          </div>
        </div>
        <button id="next" v-on:click="next">Next</button>
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
      game: new Game(5, 5)
    }
  },
  methods: {
    myclick: function (rowIndex, columnIndex) {
      console.log(rowIndex + ' ' + columnIndex)
      Vue.set(this.game.matrix[rowIndex], columnIndex, 1 - this.game.matrix[rowIndex][columnIndex])
    },
    next: function () {
      Vue.set(this.game, 'matrix', this.game.next())
    }
  },
  name: 'game-board'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #b90b14;
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
