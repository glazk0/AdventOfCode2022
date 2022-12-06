import { readFileSync } from 'node:fs';

const items = readFileSync('input.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split(/\n/);

let sum = 0;

for (let i = 0; i < items.length; i++) {
  let parts = items[i].length / 2;

  let first = items[i].slice(0, parts);
  let second = items[i].slice(parts);

  let unique = first.split('').filter((item) => second.includes(item));

  unique = unique[0];

  let uniqueValue = unique.charCodeAt(0) - 96;

  if (uniqueValue < 0) uniqueValue += 58;

  sum += uniqueValue;
}

console.log(`Part 1 - ${sum}`);

let groups = [];

for (let i = 0; i < items.length; i += 3) {
  groups.push(items.slice(i, i + 3));
}

sum = 0;

for (let i = 0; i < groups.length; i++) {
  let parts = [];

  for (let j = 0; j < groups[i].length; j++) {
    parts.push(groups[i][j].split(''));
  }

  let common = parts[0].filter((item) => parts[1].includes(item));

  common = common.filter((item) => parts[2].includes(item));

  let commonValue = common[0].charCodeAt(0) - 96;

  if (commonValue < 0) commonValue += 58;

  sum += commonValue;
}

console.log(`Part 2 - ${sum}`);
