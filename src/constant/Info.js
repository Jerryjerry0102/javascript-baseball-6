export const NUMBERS_INFO = Object.freeze({
  length: 3,
  numberRange: Object.freeze({ startInclusive: 1, endInclusive: 9 }),
  errorMessage: `[ERROR] 1부터 9까지 서로 다른 수로 이루어진 3자리의 수가 아닙니다.`,
});

export const RESULT_STRING_INFO = Object.freeze({
  ball: '볼',
  nothing: '낫싱',
  strike: '스트라이크',
});

export const RESTART_INFO = Object({
  restartNumber: 1,
  endNumber: 2,
  errorMessage: '[ERROR] 1 또는 2가 아닙니다.',
});
