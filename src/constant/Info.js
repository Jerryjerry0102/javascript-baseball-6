export const NUMBERS_INFO = Object.freeze({
  length: 3,
  numberRange: Object.freeze({ startInclusive: 1, endInclusive: 9 }),
  errorMessage: Object.freeze({
    // `[ERROR] 1부터 9까지 서로 다른 수로 이루어진 3자리의 수가 아닙니다.`,
    validLength: '[ERROR] 3자리의 수가 아닙니다.',
    validNumbers: '[ERROR] 1에서 9까지의 숫자가 아닙니다.',
    uniqueNumbers: '[ERROR] 중복되는 숫자가 있습니다.',
  }),
});

export const RESULT_STRING = Object.freeze({
  ball: '볼',
  nothing: '낫싱',
  strike: '스트라이크',
});

export const RESTART_INFO = Object({
  restartNumber: 1,
  endNumber: 2,
  errorMessage: '[ERROR] 1 또는 2가 아닙니다.',
});
