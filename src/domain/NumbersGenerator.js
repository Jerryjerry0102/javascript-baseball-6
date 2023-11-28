import { Random } from '@woowacourse/mission-utils';
import NumbersValidator from '../validator/NumbersValidator.js';
import Numbers from './Numbers.js';

class NumbersGenerator {
  #length;
  #numberRange;
  #numbersValidator;

  constructor(info) {
    this.#length = info.length;
    this.#numberRange = info.numberRange;
    this.#numbersValidator = new NumbersValidator(info);
  }

  generateRandomly() {
    const { startInclusive, endInclusive } = this.#numberRange;
    const numbers = new Set();
    while (numbers.size < this.#length) {
      numbers.add(Random.pickNumberInRange(startInclusive, endInclusive));
    }

    return this.generate(Array.from(numbers));
  }

  generate(numbers) {
    this.#numbersValidator.validate(numbers);
    return new Numbers(numbers);
  }
}

export default NumbersGenerator;
