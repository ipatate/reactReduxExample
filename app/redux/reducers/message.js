import * as Action from '../constants/message';

export const message = (state = '', action) => {
  switch (action.type) {
    case Action.ADD :
      console.log('lol', action.message);
      return action.message;
    case Action.RESET :
      return '';
    default:
      return state;
  }
};

export default message;
