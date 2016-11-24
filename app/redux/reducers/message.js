// file constant for share with reducer
import * as Action from '../constants/message';

export const message = (state = '', action) => {
  switch (action.type) {
    case Action.ADD :
      return action.message;
    case Action.RESET :
      return '';
    default:
      return state;
  }
};

export default message;
