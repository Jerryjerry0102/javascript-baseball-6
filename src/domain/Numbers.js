import Result from '../ui/Result.js';

class Numbers {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  compareTo(other) {
    return new Result(
      this.#countMatchingNumbers(other),
      this.#countMatchingIndexesAndNumbers(other),
    );
  }

  includes(otherNumber) {
    return this.#numbers.includes(otherNumber);
  }

  isMatching(other) {
    return this.#numbers.length === this.#countMatchingIndexesAndNumbers(other);
  }

  findIndex(otherNumber) {
    return this.#numbers.findIndex((number) => number === otherNumber);
  }

  #countMatchingNumbers(other) {
    return this.#numbers.filter((number) => other.includes(number)).length;
  }

  #countMatchingIndexesAndNumbers(other) {
    return this.#numbers.filter(
      (number, index) => index === other.findIndex(number),
    ).length;
  }
}

export default Numbers;
