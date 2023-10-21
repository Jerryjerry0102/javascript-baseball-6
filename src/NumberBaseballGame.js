import { Console, Random } from "@woowacourse/mission-utils";
import Message from "./Message.js";
import Query from "./Query.js";
import Validator from "./Validator.js";

class NumberBaseballGame {
  computerNumbers;
  playerNumbers;
  counter = { strike: 0, ball: 0 };

  constructor() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(this.computerNumbers);
  }

  start() {
    Console.print(Message.START);
    this.temp();
  }

  async temp() {
    const answer = await this.sendToPlayer(Query.NUMBERS);
    this.playerNumbers = this.validateInput(
      Query.NUMBERS,
      [...answer].map(Number)
    );
    this.counter.strike = this.getStrikeCounts();
    this.counter.ball = this.getBallCounts();
    const result = this.getResult();
    const isOver = this.print(result);
    if (isOver) this.shouldRestart();
    else this.temp();
  }

  async shouldRestart() {
    const answer = await this.sendToPlayer(Query.RESTART);
    const validatedAnswer = this.validateInput(Query.RESTART, +answer);
    console.log(validatedAnswer);
  }

  print(result) {
    Console.print(result);
    if (result === `3${Message.STRIKE}`) {
      Console.print(Message.END);
      return true;
    }
    return false;
  }

  getResult() {
    if (this.counter.strike === 3) return `3${Message.STRIKE}`;
    if (this.counter.strike === 0 && this.counter.ball === 0)
      return Message.NOTHING;
    if (this.counter.strike === 0) return this.counter.ball + Message.BALL;
    if (this.counter.ball === 0) return this.counter.strike + Message.STRIKE;
    return `${this.counter.ball}${Message.BALL} ${this.counter.strike}${Message.STRIKE}`;
  }

  getStrikeCounts() {
    let counts = 0;
    for (let i = 0; i < 3; i++) {
      if (this.computerNumbers[i] === this.playerNumbers[i]) counts++;
    }
    return counts;
  }

  getBallCounts() {
    let counts = 0;
    for (let i = 0; i < 3; i++) {
      if (this.playerNumbers.includes(this.computerNumbers[i])) counts++;
    }
    return counts - this.counter.strike;
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
        if (answer === 1 || answer === 2) return answer;
        throw new Error(Message.ERROR);
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
