import Result from './Result.js';

class Numbers {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  compareTo(other) {
    return new Result(
      this.#countSameNumbers(other),
      this.#countStrictSameNumbers(other),
      this.#isSame(other),
    );
  }

  includes(otherNumber) {
    return this.#numbers.includes(otherNumber);
  }

  findIndex(otherNumber) {
    return this.#numbers.findIndex((number) => number === otherNumber);
  }

  #countSameNumbers(other) {
    return this.#numbers.filter((number) => other.includes(number)).length;
  }

  #countStrictSameNumbers(other) {
    return this.#numbers.filter(
      (number, index) => index === other.findIndex(number),
    ).length;
  }

  #isSame(other) {
    return this.#numbers.length === this.#countStrictSameNumbers(other);
  }
}

export default Numbers;
