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

const fib = (number, db = {0: 0, 1: 1}) => {
  if (db[number] != undefined) {
    return db[number];
  } else {
    return db[number] = fib(number - 2, db) + fib(number - 1, db);
  }
};

rl.on('line', handler);
