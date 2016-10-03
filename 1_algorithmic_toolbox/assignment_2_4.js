const readline = require('readline');

process.stdin.setEncoding('utf8');

class DoubleInt {
  constructor(low, high = 0) {
    this.places = 15;
    this.split = Math.pow(10, this.places);
    this.high = high + Math.floor(low / this.split);
    this.low = low % this.split;
  }

  static add(a, b) {
    const low = (a.low + b.low) % a.split;
    const high = a.high + b.high + Math.floor((a.low + b.low) / a.split);
    return new DoubleInt(low, high);
  }

  static subtract(a, b) {
    const low = (a.split + a.low - b.low) % a.split;
    const high = a.high - b.high - 1 + Math.floor((a.split + a.low - b.low) / a.split);
    return new DoubleInt(low, high);
  }

  static multiply(a, b) {
    const low = (a.low * b.low) % a.split;
    const high = (a.high * b.high * a.split) +
                 (a.high * b.low) +
                 (a.low * b.high) +
                 Math.floor((a.low * b.low) / a.split);
    return new DoubleInt(low, high);
  }

  get toString() {
    if (this.high > 0) {
      const lowStr = this.low.toString();
      return this.high.toString() + "0".repeat(this.places - lowStr.length) + lowStr;
    } else {
      return this.low.toString();
    }
    return `foo`
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const handler = (line) => {
  const [x, y] = line.split(" ").map((v) => parseInt(v, 10));
  console.log(lcm(x, y).toString);
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
  return DoubleInt.multiply(new DoubleInt(x / z), new DoubleInt(y));
}

rl.on('line', handler);
