import {
  ADD_ENTRY,
  EDIT_ENTRY,
  SAVE_ENTRY,
  DELETE_ENTRY,
  SEARCH_ENTRY
} from '../constants/ActionTypes';
import { ADD, EDIT, SEARCH } from '../constants/AppModes';

export default (state = SEARCH, action) => {

  switch (action.type) {

    case ADD_ENTRY:
      return ADD;

    case EDIT_ENTRY:
      return EDIT;

    case SAVE_ENTRY:
    case DELETE_ENTRY:
    case SEARCH_ENTRY:
      return SEARCH;

    default:
      return state;
  }
};