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
    if (array.length !== 3) throw new Error(Message.ERROR);
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
