function rotate(x, y, matrix) {
  if (matrix.length < 1) return matrix;
  let newMatrix = [];
  for (let i = 0; i < y; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < x; j++) {
      newMatrix[i][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let arr2 = matrix[i].slice();
    for (let j = 0; j < arr2.length; j++) {
      newMatrix[j][matrix.length - i - 1] = arr2[j];
    }
  }
  return newMatrix;
}

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on('line', function (line) {
  lines.push(line);
  let line0 = lines[0].split(' ').map((numberStr) => Number(numberStr));
  if (lines.length === line0[0] + 1) {
    rl.close();
  }
});

function parseInput(lines) {
  let matrix = [];
  const [y, x] = lines[0].split(' ').map((numberStr) => Number(numberStr));
  for (let i = 1; i <= y; i++) {
    matrix.push(lines[i].split(' ').map((numberStr) => Number(numberStr)));
  }

  return {
    y,
    x,
    matrix,
  };
}

rl.on('close', function () {
  const { y, x, matrix } = parseInput(lines);
  let matrixFinal = rotate(y, x, matrix);
  for (let i = 0; i < matrixFinal.length; i++) {
    console.log(matrixFinal[i].join(' '));
  }
});
