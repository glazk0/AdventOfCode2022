import fs from 'node:fs';

const data = fs.readFileSync('calories.txt', 'utf8');

const elves = data.replace(/\r/g, '').trim().split(/\n\n/);

const calories = elves.map((elf) => elf.split(/\n/).reduce((acc, curr) => acc + parseInt(curr, 10), 0));

console.log(`Part 1 - ${Math.max(...calories)} cals are carried by the top elve `); // 64929

calories.sort((a, b) => b - a);

console.log(`Part 2 - ${calories[0] + calories[1] + calories[2]} cals are carried by the top 3 elves`); // 193697
