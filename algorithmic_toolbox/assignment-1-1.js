const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const readLine = (line) => {
  const sum = [line[0], line[2]]
    .map((x) => parseInt(x, 10))
    .reduce((x, y) => x + y)
  console.log(sum);
  process.exit();
};

rl.on('line', readLine);
