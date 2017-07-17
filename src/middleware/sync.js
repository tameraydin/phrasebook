import { SAVE_ENTRY, DELETE_ENTRY } from '../constants/ActionTypes';

export default store => next => action => {
  let result = next(action);

  return action.type === SAVE_ENTRY || action.type === DELETE_ENTRY
    ? store.getState()
    : result;
};