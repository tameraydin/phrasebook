import { ADD_ENTRY, EDIT_ENTRY } from '../constants/ActionTypes';
import { ADD, EDIT, SEARCH } from '../constants/AppModes';

export default (state = SEARCH, action) => {

  switch (action.type) {
    case ADD_ENTRY:
      return ADD;
    case EDIT_ENTRY:
      return EDIT;
    default:
      return state;
  }
};