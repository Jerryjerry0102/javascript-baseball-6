import OutputView from './view/OutputView.js';

class Computer {
  #player;
  #numbersGenerator;
  #numbers;

  constructor(player, numbersGenerator) {
    this.#player = player;
    this.#numbersGenerator = numbersGenerator;
  }

  async pickNumbers() {
    this.#numbers = this.#numbersGenerator.generateRandomly();

    await this.#askNumbers();
  }

  async check(playerInput) {
    const playerNumbers = this.#numbersGenerator.generate(playerInput);

    const result = this.#numbers.compareTo(playerNumbers);
    OutputView.printResult(result);

    if (!result.isMatching()) await this.#askNumbers();
  }

  async #askNumbers() {
    await this.#player.guessNumbersOf(this);
  }
}

export default Computer;
