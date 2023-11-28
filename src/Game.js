import NUMBERS_INFO from './constant/NumbersInfo.js';
import Computer from './domain/Computer.js';
import NumbersGenerator from './domain/NumbersGenerator.js';
import Player from './Player.js';
import OutputView from './view/OutputView.js';

class Game {
  #computer = new Computer();
  #player = new Player();
  #numbersGenerator = new NumbersGenerator(NUMBERS_INFO);

  async play() {
    OutputView.printStartMessage();
    this.#computer.pickNumbersBy(this.#numbersGenerator);
    await this.#player.guessNumbersOf(this.#computer, this.#numbersGenerator);
    OutputView.printEndMessage();
  }
}

export default Game;
