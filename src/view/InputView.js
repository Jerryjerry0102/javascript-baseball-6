import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';

const InputView = {
  async readNumbers() {
    const input = await Console.readLineAsync(MESSAGE.query.numbers);
    return input.split('').map(Number);
  },

  async readAnswerToRestart() {
    const input = await Console.readLineAsync(MESSAGE.query.restart);
    return Number(input);
  },
};

export default InputView;
