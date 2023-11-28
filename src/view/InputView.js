import { Console } from '@woowacourse/mission-utils';
import { QUERY_MESSAGE } from '../constant/Message.js';

const InputView = {
  async readNumbers() {
    const numbers = await Console.readLineAsync(QUERY_MESSAGE.numbers);
    return numbers.split('').map(Number);
  },
};

export default InputView;
