import {neighbors} from './constants'

export class Game {

  constructor (row, column) {
    this.row = row
    this.column = column
    this.matrix = new Array(row)

    for (var i = 0; i < this.row; i++) {
      this.matrix[i] = new Array(column)
      for (var k = 0; k < this.column; ++k) {
        this.matrix[i][k] = 0
      }
    }
  }
  next () {
    var newMatrix = new Array(this.row)
    for (var i = 0; i < this.row; i++) {
      newMatrix[i] = new Array(this.column)
      for (var k = 0; k < this.column; ++k) {
        newMatrix[i][k] = this.getNextValueOfCell(i, k)
      }
    }
    return newMatrix
  }
  getNumberOfLiveNeighbours (i, k) {
    var count = 0
    for (let n of neighbors) {
      if (i + n[0] > 0 && i + n[0] < this.row) {
        if (k + n[1] > 0 && k + n[1] < this.column) {
          count += this.matrix[i + n[0]][k + n[1]]
        }
      }
    }
    return count
  }
  getNextValueOfCell (i, k) {
    var numberOfLiveNeighbours = this.getNumberOfLiveNeighbours(i, k)
    if (this.matrix[i][k] === 0) {
      if (numberOfLiveNeighbours === 3) {
        return 1
      }
    } else {
      if (numberOfLiveNeighbours < 2) {
        return 0
      } else if (numberOfLiveNeighbours > 3) {
        return 0
      }
    }
    return this.matrix[i][k]
  }
  addColumn () {
    for (var i = 0; i < this.row; ++i) {
      this.matrix[i].push(0)
    }
    this.column++
    return this.matrix
  }
  addRow () {
    var newRow = new Array(this.column)
    for (var k = 0; k < this.column; ++k) {
      newRow[k] = 0
    }
    this.matrix.push(newRow)
    this.row++
    return this.matrix
  }
  deleteColumn () {
    for (var i = 0; i < this.row; ++i) {
      this.matrix[i].pop()
    }
    this.column--
    return this.matrix
  }
  deleteRow () {
    this.matrix.pop()
    this.row--
    return this.matrix
  }
}
