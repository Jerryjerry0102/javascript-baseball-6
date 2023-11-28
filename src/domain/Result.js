import { RESULT_STRING } from '../constant/Info.js';

class Result {
  #ballCount;
  #strikeCount;
  #isMatching;

  constructor(matchingNumbersCount, matchingIndexesAndNumbersCount, isSame) {
    this.#ballCount = matchingNumbersCount - matchingIndexesAndNumbersCount;
    this.#strikeCount = matchingIndexesAndNumbersCount;
    this.#isMatching = isSame;
  }

  isMatching() {
    return this.#isMatching;
  }

  toString() {
    if (this.#haveBallCountAndStrikeCount()) {
      return `${this.#formatBall()} ${this.#formatStrike()}`;
    }
    if (this.#haveBallCount()) return this.#formatBall();
    if (this.#haveStrikeCount()) return this.#formatStrike();

    return RESULT_STRING.nothing;
  }

  #haveBallCountAndStrikeCount() {
    return this.#ballCount > 0 && this.#strikeCount > 0;
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
