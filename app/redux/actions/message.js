import * as Action from '../constants/message';

export function addMessage(message = '') {
  return {
    type: Action.ADD,
    message,
  };
}

export function resetMessage(message = '') {
  return {
    type: Action.RESET,
    message,
  };
}
