const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const handler = (line) => {
  const value = parseInt(line, 10);
  console.log(change(value));
  rl.close();
};

const change = (value) => {
  [rem, count] = [10, 5, 1].reduce(([value, count], size) => {
    const coins = Math.floor(value / size);
    return [value - (coins * size), count + coins];
  }, [value, 0]);
  return count;
};

rl.on('line', handler);
