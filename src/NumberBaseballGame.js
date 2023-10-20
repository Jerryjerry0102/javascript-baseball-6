import { Console, Random } from "@woowacourse/mission-utils";
import Message from "./Message.js";
import Query from "./Query.js";

class NumberBaseballGame {
  computerNumbers;
  playerNumbers;

  constructor() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  start() {
    Console.print(Message.START);
    this.askPlayerNumbers();
  }

  async askPlayerNumbers() {
    try {
      const playerNumbers = await Console.readLineAsync(Query.NUMBERS);
      this.playerNumbers = playerNumbers;
    } catch (error) {
      // reject 되는 경우
    }
  }
}

export default NumberBaseballGame;
