function findBestSequence(array) {
  let sum = 0;
  let sumMax = 0;
  let secondArray = [];
  outer: for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] > 3 && secondArray.length <= 7) {
        if (array[j] == 5) sum += 5;
        secondArray.push(array[j]);
      }
      if (secondArray.length == 7) {
        if (sumMax < sum) sumMax = sum;
        sum = 0;
        secondArray = [];
        if (array.length - i - 1 < 7) break outer;
      }
      if (array[j] <= 3) {
        sum = 0;
        secondArray = [];
        i = j;
        if (array.length - i - 1 < 7) {
          break outer;
        } else {
          continue outer;
        }
      }
    }
  }
  if (sumMax > 0) {
    return sumMax / 5;
  } else {
    return -1;
  }
}

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on('line', function (line) {
  lines.push(line);

  if (lines.length === 2) {
    rl.close();
  }
});

function parseInput(lines) {
  const array = lines[1].split(' ').map((numberStr) => Number(numberStr));

  return array;
}

rl.on('close', function () {
  const array = parseInput(lines);

  console.log(findBestSequence(array));
});
