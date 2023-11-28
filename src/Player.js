import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';

class Player {
  async guessNumbersOf(computer, numbersGenerator) {
    const input = await InputView.readNumbers();
    const numbers = numbersGenerator.generate(input);

    const result = computer.check(numbers);
    OutputView.printResult(result);

    if (!result.isMatching()) {
      await this.guessNumbersOf(computer, numbersGenerator);
    }
  }
}

export default Player;
