class NumbersValidator {
  #length;
  #numberRange;
  #errorMessage;

  constructor({ length, numberRange, errorMessage }) {
    this.#length = length;
    this.#numberRange = numberRange;
    this.#errorMessage = errorMessage;
  }

  validate(numbers) {
    if (
      !this.#isSatisfiedByLength(numbers) ||
      !this.#isSatisfiedByNumberRange(numbers) ||
      !this.#isUnique(numbers)
    ) {
      throw new Error(this.#errorMessage);
    }
  }

  #isSatisfiedByLength(numbers) {
    return numbers.length === this.#length;
  }

  #isSatisfiedByNumberRange(numbers) {
    return numbers.every(
      (number) =>
        this.#numberRange.startInclusive <= number &&
        number <= this.#numberRange.endInclusive,
    );
  }

  #isUnique(numbers) {
    return new Set(numbers).size === numbers.length;
  }
}

export default NumbersValidator;
