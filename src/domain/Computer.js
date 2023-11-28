class Computer {
  #numbers;

  pickNumbersBy(numbersGenerator) {
    this.#numbers = numbersGenerator.generateRandomly();
  }

  check(playerNumbers) {
    return this.#numbers.compareTo(playerNumbers);
  }
}

export default Computer;
