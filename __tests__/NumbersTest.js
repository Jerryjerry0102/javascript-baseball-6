import { RESULT_STRING } from '../src/constant/Info.js';
import Numbers from '../src/domain/Numbers.js';

describe('숫자들 클래스 테스트', () => {
  const { ball, strike, nothing } = RESULT_STRING;
  const numbers = new Numbers([1, 2, 3]);

  test('[4,5,6]일 경우 낫싱', () => {
    const result = numbers.compareTo(new Numbers([4, 5, 6]));
    expect(result.toString()).toStrictEqual(nothing);
  });

  test('[1,2,3]일 경우 3스트라이크', () => {
    const result = numbers.compareTo(new Numbers([1, 2, 3]));
    expect(result.toString()).toStrictEqual(`3${strike}`);
  });

  test('[3,1,2]일 경우 3볼', () => {
    const result = numbers.compareTo(new Numbers([3, 1, 2]));
    expect(result.toString()).toStrictEqual(`3${ball}`);
  });

  test('[1,4,2]일 경우 1볼 1스트라이크', () => {
    const result = numbers.compareTo(new Numbers([1, 4, 2]));
    expect(result.toString()).toStrictEqual(`1${ball} 1${strike}`);
  });

  test('[3,2,1]일 경우 2볼 1스트라이크', () => {
    const result = numbers.compareTo(new Numbers([3, 2, 1]));
    expect(result.toString()).toStrictEqual(`2${ball} 1${strike}`);
  });
});
