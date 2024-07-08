const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let numberOfLines = null;

rl.on('line', function (line) {
  if (numberOfLines === null) {
    numberOfLines = Number(line);
    return;
  }

  lines.push(line);
  if (lines.length == numberOfLines) {
    rl.close();
  }
});

function parseInput(lines) {
  let arrayofDirectories = [];
  lines.sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].split('').find((item) => item == '/')) {
      let arrayFromString = lines[i].split('/');
      arrayofDirectories.push(arrayFromString);
      continue;
    }
    arrayofDirectories.push(lines[i]);
  }
  return arrayofDirectories;
}

function getDirectoriesInOrder(arrayofDirectories) {
  let arrayOfResults = arrayofDirectories.map(function (directory) {
    if (typeof directory == 'string') {
      return directory;
    }
    let result = directory.map(function (item, index) {
      if (index != directory.length - 1) {
        item = '  ';
        return item;
      }
      return item;
    });
    return result.join('');
  });
  return arrayOfResults;
}

rl.on('close', function () {
  const arrayofDirectories = parseInput(lines);
  getDirectoriesInOrder(arrayofDirectories).map((item) => console.log(item));
});
