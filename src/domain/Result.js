import { RESULT_STRING_INFO } from '../constant/Info.js';

class Result {
  #ballCount;
  #strikeCount;
  #isMatching;

  constructor(sameCount, exactlySameCount, isSame) {
    this.#ballCount = sameCount - exactlySameCount;
    this.#strikeCount = exactlySameCount;
    this.#isMatching = isSame;
  }

  isMatching() {
    return this.#isMatching;
  }

  toString() {
    const { nothing, ball, strike } = RESULT_STRING_INFO;

    if (this.#ballCount > 0 && this.#strikeCount > 0)
      return `${this.#ballCount}${ball} ${this.#strikeCount}${strike}`;
    if (this.#ballCount > 0) return `${this.#ballCount}${ball}`;
    if (this.#strikeCount > 0) return `${this.#strikeCount}${strike}`;
    return nothing;
  }
}

export default Result;
