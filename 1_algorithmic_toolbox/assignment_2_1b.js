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
  if (x == 0) {
    return y;
  } else {
    return fib(x - 1, z, y + z);
  }
};

rl.on('line', handler);
