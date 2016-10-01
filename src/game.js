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

  getNextValueOfCell (i, k) {
    return 1 - this.matrix[i][k]
  }
}
