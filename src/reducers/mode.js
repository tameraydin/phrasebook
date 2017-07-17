import { ADD, EDIT, SEARCH } from '../constants/AppModes';
import {
  SET_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  SAVE_ENTRY,
  DELETE_ENTRY,
  SEARCH_ENTRY,
  SET_MODE
} from '../constants/ActionTypes';

export default (state = SEARCH, action) => {

  switch (action.type) {
    case SET_MODE:
      return action.payload.mode;

    case ADD_ENTRY:
      return ADD;

    case EDIT_ENTRY:
      return EDIT;

    case SET_ENTRIES:
    case SAVE_ENTRY:
    case DELETE_ENTRY:
    case SEARCH_ENTRY:
      return SEARCH;

    default:
      return state;
  }
};