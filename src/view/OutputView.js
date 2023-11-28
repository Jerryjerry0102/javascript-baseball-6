import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/Message.js';

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.start);
  },

  printResult(result) {
    Console.print(result.toString());
  },

  printEndMessage() {
    Console.print(MESSAGE.end);
  },
};

export default OutputView;
