import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/Message.js';

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.start);
  },

  printResult(stringResult) {
    Console.print(stringResult);
  },

  printEndMessage() {
    Console.print(MESSAGE.end);
  },
};

export default OutputView;
