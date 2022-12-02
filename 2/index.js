import fs from 'node:fs';

const data = fs.readFileSync('input.txt', 'utf8');

const rounds = data.replace(/\r/g, '').trim().split(/\n/);

let total = 0;

for (const round of rounds) {
  const [opponent, player] = round.split(' ');

  const opponentValue = opponent.charCodeAt(0) - 64;
  const playerValue = player.charCodeAt(0) - 87;

  if (opponentValue === playerValue) {
    total += 3;
  } else if (opponentValue === 1 && playerValue === 2) {
    total += 6;
  } else if (opponentValue === 2 && playerValue === 3) {
    total += 6;
  } else if (opponentValue === 3 && playerValue === 1) {
    total += 6;
  }

  total += playerValue;
}

console.log(`Part 1 - ${total}`);

total = 0;

for (const round of rounds) {
  const [opponent, player] = round.split(' ');

  const opponentValue = opponent.charCodeAt(0) - 64;
  const playerValue = player.charCodeAt(0) - 87;

  if (opponentValue === 1) {
    if (playerValue === 1) {
      total += 3 + 0;
    } else if (playerValue === 2) {
      total += 1 + 3;
    } else if (playerValue === 3) {
      total += 2 + 6;
    }
  } else if (opponentValue === 2) {
    if (playerValue === 1) {
      total += 1 + 0;
    } else if (playerValue === 2) {
      total += 2 + 3;
    } else if (playerValue === 3) {
      total += 3 + 6;
    }
  } else if (opponentValue === 3) {
    if (playerValue === 1) {
      total += 2 + 0;
    } else if (playerValue === 2) {
      total += 3 + 3;
    } else if (playerValue === 3) {
      total += 1 + 6;
    }
  }
}

console.log(`Part 2 - ${total}`);
