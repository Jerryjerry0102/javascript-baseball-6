import { NUMBERS_INFO, RESTART_INFO } from '../constant/Info.js';
import Computer from './Computer.js';
import NumbersGenerator from '../domain/NumbersGenerator.js';
import Restarter from './Restarter.js';
import Player from './Player.js';
import OutputView from '../ui/OutputView.js';

class Game {
  #player = new Player();
  #computer = new Computer(this.#player, new NumbersGenerator(NUMBERS_INFO));
  #restarter = new Restarter(RESTART_INFO);

  async start() {
    OutputView.printStartMessage();
    await this.#play();
  }

  async #play() {
    await this.#computer.pickNumbers();
    OutputView.printEndMessage();
    await this.#askRestart();
  }

  async #askRestart() {
    const input = await this.#player.answerToRestart();
    if (this.#restarter.isRestart(input)) await this.#play();
  }
}

export default Game;
