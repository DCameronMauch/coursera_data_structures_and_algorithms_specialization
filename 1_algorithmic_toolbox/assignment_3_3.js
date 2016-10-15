const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const getBound = (line) => {
  const size = parseInt(line, 10);
  rl.question('', getPPC(size));
};

const getPPC = (size) =>
  (line) => {
    ppc = line.split(" ").map((x) => parseInt(x, 10));
    rl.question('', getCPD(size, ppc));
  };

const getCPD = (size, ppc) =>
  (line) => {
    cpd = line.split(" ").map((x) => parseInt(x, 10));
    console.log(calculate(size, ppc, cpd));
    rl.close();
  };

const calculate = (size, ppc, cpd) => {
  ppc.sort(numberically_descending);
  cpd.sort(numberically_descending);
  return zip(ppc, cpd).map(([x, y]) => x * y).reduce((x, y) => x + y);
};

const numberically_descending = (x, y) => y - x;

const zip = (left, right) => {
  return left.map((v, i) => [v, right[i]]);
}

rl.question('', getBound);
