const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const handler = (line) => {
  const index = parseInt(line, 10);
  console.log(fib(index));
  rl.close();
};

const fib = (x, y = 0, z = 1) => {
  while (x > 0) {
    [x, y, z] = [x - 1, z, (y + z) % 10]
  }
  return y;
};

rl.on('line', handler);
