import OutputView from '../ui/OutputView.js';

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

    OutputView.printResult(this.#numbers.compareTo(playerNumbers));

    if (!this.#numbers.isMatching(playerNumbers)) await this.#askNumbers();
  }

  async #askNumbers() {
    await this.#player.guessNumbersOf(this);
  }
}

export default Computer;
