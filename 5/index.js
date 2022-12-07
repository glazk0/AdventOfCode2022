import { readFileSync } from 'node:fs';

const data = readFileSync('input.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split(/\n/);

const moves = [
  ['D', 'M', 'S', 'Z', 'R', 'F', 'W', 'N'],
  ['W', 'P', 'Q', 'G', 'S'],
  ['W', 'R', 'V', 'Q', 'F', 'N', 'J', 'C'],
  ['F', 'Z', 'P', 'C', 'G', 'D', 'L'],
  ['T', 'P', 'S'],
  ['H', 'D', 'F', 'W', 'R', 'L'],
  ['Z', 'N', 'D', 'C'],
  ['W', 'N', 'R', 'F', 'V', 'S', 'J', 'Q'],
  ['R', 'M', 'S', 'G', 'Z', 'W', 'V'],
];

const instructionReader = ([itemCount, from, to]) => {
  let accumulator = [];
  for (let i = 0; i < itemCount; i++) {
    let poped = moves[from - 1].pop();
    accumulator.push(poped);
  }
  if (part) accumulator.reverse();
  moves[to - 1] = [...moves[to - 1], ...accumulator];
};

for (let index in data) {
  let set = data[index]
    .replace('move', '')
    .replace('from', ',')
    .replace('to', ',');
  instructionReader(set.split(',').map(Number));
}

for (let i in moves) {
  console.log(moves[i].at(-1));
}
