import { RESTART_INFO } from '../src/constant/Info.js';
import Restarter from '../src/service/Restarter.js';

describe('재시작 클래스 테스트', () => {
  const restarter = new Restarter(RESTART_INFO);

  describe('재시작 숫자 검증', () => {
    test('재시작 숫자가 1 또는 2인 경우 예외 발생 X', () => {
      expect(() => restarter.isRestart(1)).not.toThrow();
      expect(() => restarter.isRestart(2)).not.toThrow();
    });

    test('재시작 숫자가 1 또는 2가 아닌 경우 예외 발생', () => {
      expect(() => restarter.isRestart(0)).toThrow();
      expect(() => restarter.isRestart(4)).toThrow();
    });
  });

  describe('isRestart 반환값 확인', () => {
    test('재시작 숫자가 1인 경우 true 반환', () => {
      expect(restarter.isRestart(1)).toBeTruthy();
    });
    test('재시작 숫자가 2인 경우 false 반환', () => {
      expect(restarter.isRestart(2)).toBeFalsy();
    });
  });
});
