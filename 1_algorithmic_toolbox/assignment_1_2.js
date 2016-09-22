const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const getCount = (line) => {
  const count = parseInt(line, 10);
  rl.on('line', findMax(count));
};

const findMax = (count) =>
  (line) => {
    const maxProduct = line
      .split(/\s+/)
      .slice(0, count)
      .map((x) => parseInt(x, 10))
      .sort((x, y) => x - y)
      .slice(-2)
      .reduce((x, y) => x * y);
    console.log(maxProduct);
    rl.close();
  };

rl.on('line', getCount);
