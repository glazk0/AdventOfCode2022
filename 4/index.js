import { readFileSync } from 'node:fs';

const lines = readFileSync('input.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split(/\n/);

let res = lines.map((line) => {
  const [first, second] = line
    .split(',')
    .map((interval) => interval.split('-').map(Number))
    .sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  return first[0] <= second[0] && first[1] >= second[1] ? 1 : 0;
});

console.log(`Part 1 - ${res.reduce((a, b) => a + b, 0)}`);

res = lines.map((line) => {
  const [first, second] = line
    .split(',')
    .map((interval) => interval.split('-').map(Number))
    .sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return first[1] >= second[0] && second[1] >= first[0] ? 1 : 0;
});

console.log(`Part 2 - ${res.reduce((a, b) => a + b, 0)}`);
