import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

function generateRound() {
  const question = getRandomInRange(0, 100);
  const answer = String(isPrime(question) ? 'yes' : 'no');
  return [question, answer];
}

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};

export default runPrimeGame;
