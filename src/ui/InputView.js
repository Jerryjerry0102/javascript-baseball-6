import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';

const InputView = {
  async readNumbers() {
    const input = await Console.readLineAsync(MESSAGE.userInput.numbers);
    this.validate(input);
    return input.split('').map(Number);
  },

  async readAnswerToRestart() {
    const input = await Console.readLineAsync(MESSAGE.userInput.restart);
    this.validate(input);
    return Number(input);
  },

  validate(input) {
    if (!input) throw new Error(MESSAGE.userInputError);
  },
};

export default InputView;
