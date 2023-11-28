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
    const { validLength, validNumbers, uniqueNumbers } = this.#errorMessage;
    if (!this.#hasValidLength(numbers)) throw new Error(validLength);
    if (!this.#hasValidNumbers(numbers)) throw new Error(validNumbers);
    if (!this.#hasUniqueNumbers(numbers)) throw new Error(uniqueNumbers);
  }

  #hasValidLength(numbers) {
    return numbers.length === this.#length;
  }

  #hasValidNumbers(numbers) {
    return numbers.every((number) => this.#isInNumberRange(number));
  }

  #isInNumberRange(number) {
    return (
      this.#numberRange.startInclusive <= number &&
      number <= this.#numberRange.endInclusive
    );
  }

  #hasUniqueNumbers(numbers) {
    return new Set(numbers).size === numbers.length;
  }
}

export default NumbersValidator;
