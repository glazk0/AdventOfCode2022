import fs from 'node:fs';

const data = fs.readFileSync('calories.txt', 'utf8');

const calories = data.split(/\r?\n/);

let highest = 0;

for (let i = 0; i < calories.length; i++) {
  let sum = 0;

  for (let j = i; j < calories.length; j++) {
    sum += parseInt(calories[j]);

    if (sum > highest) {
      highest = sum;
    }
  }
}

console.log(`Returned highest value: ${highest}`); // 64929
