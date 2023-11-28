import InputView from './view/InputView.js';

class Player {
  async guessNumbersOf(computer) {
    const input = await InputView.readNumbers();
    await computer.check(input);
  }

  async answerToRestart() {
    const input = await InputView.readAnswerToRestart();
    return input;
  }
}

export default Player;
