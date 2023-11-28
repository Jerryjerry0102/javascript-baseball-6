import { Console } from '@woowacourse/mission-utils';
import { QUERY_MESSAGE } from '../constant/Message.js';

const InputView = {
  async readNumbers() {
    const input = await Console.readLineAsync(QUERY_MESSAGE.numbers);
    return input.split('').map(Number);
  },

  async readAnswerToRestart() {
    const input = await Console.readLineAsync(QUERY_MESSAGE.restart);
    return Number(input);
  },
};

export default InputView;
