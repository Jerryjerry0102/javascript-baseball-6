import { Console, Random } from "@woowacourse/mission-utils";
import Message from "./Message.js";
import Query from "./Query.js";

class NumberBaseballGame {
  computerNumbers;
  playerNumbers;

  constructor() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async start() {
    Console.print(Message.START);
    this.getPlayerNumbers();
  }

  async getPlayerNumbers() {
    const answer = await this.sendToPlayer(Query.NUMBERS);
    this.isUniqueNumbers([...answer].map((x) => Number(x)));
  }

  isUniqueNumbers(array) {
    if (array.length !== 3)
      throw new Error(`${Message.ERROR} 3자리를 입력하세요.`);
    array.forEach((v) => {
      if (!(1 <= v || v <= 9))
        throw new Error(`${Message.ERROR} 1부터 9 사이의 수 3개를 입력하세요.`);
    });
    if (array.length !== new Set(array).size)
      throw new Error(`${Message.ERROR} 서로 다른 수를 입력하세요.`);
  }

  async sendToPlayer(query) {
    try {
      return await Console.readLineAsync(query);
    } catch (error) {
      // reject 되는 경우
    }
  }
}

export default NumberBaseballGame;
