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
}
