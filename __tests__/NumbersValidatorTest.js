import { NUMBERS_INFO } from '../src/constant/Info.js';
import NumbersValidator from '../src/validator/NumbersValidator.js';

describe('숫자들 검증자 클래스 테스트', () => {
  const numbersValidator = new NumbersValidator(NUMBERS_INFO);

  describe('길이 검증', () => {
    test('배열의 길이가 3인 경우 예외 발생 X', () => {
      expect(() => numbersValidator.validate([1, 2, 3])).not.toThrow();
    });

    test('배열의 길이가 3이 아닌 경우 예외 발생', () => {
      expect(() => numbersValidator.validate([1, 2])).toThrow();
      expect(() => numbersValidator.validate([1, 2, 3, 4])).toThrow();
    });
  });

  describe('범위 검증', () => {
    test('배열이 1에서 9까지의 숫자로 이루어진 경우 예외 발생 X', () => {
      expect(() => numbersValidator.validate([1, 5, 9])).not.toThrow();
    });

    test('배열이 1에서 9까지의 숫자로 이루어지지 않은 경우 예외 발생', () => {
      expect(() => numbersValidator.validate([0, 5, 9])).toThrow();
      expect(() => numbersValidator.validate([1, 5, 10])).toThrow();
    });
  });

  describe('중복 검증', () => {
    test('배열에 중복되는 숫자가 없으면 예외 발생 X', () => {
      expect(() => numbersValidator.validate([1, 2, 3])).not.toThrow();
    });

    test('배열에 중복되는 숫자가 있으면 예외 발생', () => {
      expect(() => numbersValidator.validate([1, 1, 2])).toThrow();
      expect(() => numbersValidator.validate([2, 1, 2])).toThrow();
    });
  });
});
