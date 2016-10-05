const readline = require('readline');

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const getBounds = (line) => {
  const [c, s] = line.split(" ").map((x) => parseInt(x, 10));
  rl.question('', getItem(c, s));
};

const getItem = (c, s, l = []) => {
  return (line) => {
    const i = line.split(" ").map((x) => parseInt(x, 10));
    l.push(i);
    if (c > 1) {
      rl.question('', getItem(c - 1, s, l));
    } else {
      const x = l.sort(([v1, w1], [v2, w2]) => (v1 / w1) - (v2 / w2));
      console.log(calculate(s, x));
      rl.close();
    }
  }
}

const calculate = (s, l, t = 0) => {
  if (s == 0 || l.length == 0) {
    return t;
  } else {
    const [v, w] = l.pop();
    const x = Math.min(s, w);
    return calculate(s - x, l, t + (v * x / w));
  }
}

rl.question('', getBounds);
