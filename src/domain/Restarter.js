class Restarter {
  #restartNumber;
  #endNumber;
  #errorMessage;

  constructor({ restartNumber, endNumber, errorMessage }) {
    this.#restartNumber = restartNumber;
    this.#endNumber = endNumber;
    this.#errorMessage = errorMessage;
  }

  isRestart(input) {
    this.#validate(input);
    return this.#restartNumber === input;
  }

  #validate(number) {
    if (![this.#restartNumber, this.#endNumber].includes(number)) {
      throw new Error(this.#errorMessage);
    }
  }
}

export default Restarter;
