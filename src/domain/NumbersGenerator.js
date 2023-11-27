import { Random } from '@woowacourse/mission-utils';
import NumbersValidator from '../validator/NumbersValidator.js';
import Numbers from './Numbers.js';

class NumbersGenerator {
  #length;
  #numberRange;
  #validator;

  constructor(info) {
    this.#length = info.length;
    this.#numberRange = info.numberRange;
    this.#validator = new NumbersValidator(info);
  }

  generate(numbers) {
    this.#validator.validate(numbers);
    return new Numbers(numbers);
  }

  generateRandom() {
    const numbers = [];

    while (numbers.length < this.#length) {
      const number = Random.pickNumberInRange(
        this.#numberRange.startInculisve,
        this.#numberRange.endInclusvie,
      );
      if (!numbers.includes(number)) numbers.push(number);
    }

    return this.generate(numbers);
  }
}

export default NumbersGenerator;
