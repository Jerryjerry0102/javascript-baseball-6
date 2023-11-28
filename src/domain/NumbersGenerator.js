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
    const numbers = [];

    while (numbers.length < this.#length) {
      const number = Random.pickNumberInRange(
        this.#numberRange.startInclusive,
        this.#numberRange.endInclusive,
      );
      if (!numbers.includes(number)) numbers.push(number);
    }
    console.log(numbers);

    return this.generate(numbers);
  }

  generate(numbers) {
    this.#numbersValidator.validate(numbers);
    return new Numbers(numbers);
  }
}

export default NumbersGenerator;
