const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const handler = (line) => {
  const [x, m] = line.split(" ").map((v) => parseInt(v, 10));
  console.log(fib_modulo(x, m));
  rl.close();
};

const fib_modulo = (x, m, y = 0, z = 1) => {
  while (x > 0) {
    [x, y, z] = [x - 1, z, (y + z) % m]
  }
  return y;
};

rl.on('line', handler);
