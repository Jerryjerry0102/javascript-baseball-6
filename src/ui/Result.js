import { RESULT_STRING } from '../constant/Info.js';

class Result {
  #ballCount;
  #strikeCount;

  constructor(matchingNumbersCount, matchingIndexesAndNumbersCount) {
    this.#ballCount = matchingNumbersCount - matchingIndexesAndNumbersCount;
    this.#strikeCount = matchingIndexesAndNumbersCount;
  }

  toString() {
    if (this.#haveBallCount() && this.#haveStrikeCount()) {
      return `${this.#formatBall()} ${this.#formatStrike()}`;
    }

    if (this.#haveBallCount()) return this.#formatBall();
    if (this.#haveStrikeCount()) return this.#formatStrike();

    return RESULT_STRING.nothing;
  }

  #haveBallCount() {
    return this.#ballCount > 0;
  }

  #haveStrikeCount() {
    return this.#strikeCount > 0;
  }

  #formatBall() {
    return `${this.#ballCount}${RESULT_STRING.ball}`;
  }

  #formatStrike() {
    return `${this.#strikeCount}${RESULT_STRING.strike}`;
  }
}

export default Result;
