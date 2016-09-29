const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const handler = (line) => {
  const [x, y] = line.split(" ").map((v) => parseInt(v, 10));
  console.log(lcm(x, y));
  rl.close();
};

const gcd = (x, y) => {
  while (y > 0) {
    [x, y] = [y, x % y]
  }
  return x;
};

const lcm = (x, y) => {
  const z = gcd(x, y);
  return (x / z) * (y / z) * z;
}

rl.on('line', handler);
