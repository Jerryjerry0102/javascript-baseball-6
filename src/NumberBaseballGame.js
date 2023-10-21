import { Console, Random } from "@woowacourse/mission-utils";
import Message from "./Message.js";
import Query from "./Query.js";
import Validator from "./Validator.js";

class NumberBaseballGame {
  computerNumbers;
  playerNumbers;

  constructor() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async start() {
    Console.print(Message.START);
    const answer = await this.sendToPlayer(Query.NUMBERS);
    const validatedInput = this.validateInput(
      Query.NUMBERS,
      [...answer].map(Number)
    );
    console.log(validatedInput);
  }

  validateInput(query, answer) {
    switch (query) {
      case Query.NUMBERS:
        if (
          Validator.isLength(3, 3, answer) &&
          Validator.isNumberArray(answer) &&
          Validator.isUnique(answer)
        )
          return answer;
        throw new Error(Message.ERROR);
      case Query.RESTART:
        break;
    }
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
