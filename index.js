const square = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
]

function rotatePixal (i1, i2, matrix) {
  const topLeft = matrix[i1][i1]
  const topRight = matrix[i1][i2]
  const bottomRight = matrix[i2][i2]
  const bottomLeft = matrix[i2][i1]
  matrix[i1][i2] = topLeft
  matrix[i2][i2] = topRight
  matrix[i2][i1] = bottomRight
  matrix[i1][i1] = bottomLeft
}
console.log(square)
const i = 0
const j = square.length - 1 - i
rotatePixal(i, j, square)
console.log(square)