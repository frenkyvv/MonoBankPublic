import seedrandom from 'seedrandom';

const random = seedrandom('mi-semilla-aleatoria');

function uniformRandom(min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}

export { uniformRandom };