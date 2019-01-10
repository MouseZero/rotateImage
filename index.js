const square = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
]

function rotatePixal (i1, i2, matrix) {
  const i1Inverse = matrix.length - 1 - i1
  const i2Inverse = matrix.length - 1 - i2

  // Get 4 pixels that need rotating
  const topLeft = matrix[i1][i2]
  const topRight = matrix[i2][i1Inverse]
  const bottomRight = matrix[i1Inverse][i2Inverse]
  const bottomLeft = matrix[i2Inverse][i1]

  // Rotate the new pixels
  matrix[i1][i2] = bottomLeft
  matrix[i2][i1Inverse] = topLeft
  matrix[i1Inverse][i2Inverse] = topRight
  matrix[i2Inverse][i1] = bottomRight
}

console.log(square)
rotatePixal(0, 0, square)
rotatePixal(0, 1, square)
rotatePixal(0, 2, square)
rotatePixal(0, 3, square)
rotatePixal(0, 4, square)
console.log(square)