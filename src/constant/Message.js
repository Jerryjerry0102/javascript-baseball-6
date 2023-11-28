import { NUMBERS_INFO, RESTART_INFO } from './Info.js';

const MESSAGE = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  end: `${NUMBERS_INFO.length}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  query: Object.freeze({
    numbers: '숫자를 입력해주세요 : ',
    restart: `게임을 새로 시작하려면 ${RESTART_INFO.restartNumber}, 종료하려면 ${RESTART_INFO.endNumber}를 입력하세요.\n`,
  }),
});

export default MESSAGE;
