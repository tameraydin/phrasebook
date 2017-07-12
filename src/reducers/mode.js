import { ADD_ENTRY, EDIT_ENTRY, SAVE_ENTRY, SEARCH_ENTRY } from '../constants/ActionTypes';
import { EDIT, SEARCH } from '../constants/AppModes';

export default (state = SEARCH, action) => {

  switch (action.type) {

    case ADD_ENTRY:
      return EDIT;

    case EDIT_ENTRY:
      return EDIT;

    case SAVE_ENTRY:
      return SEARCH;

    case SEARCH_ENTRY:
      return SEARCH;

    default:
      return state;
  }
};