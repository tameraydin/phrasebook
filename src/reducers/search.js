import { ADD_ENTRY, SEARCH_ENTRY } from '../constants/ActionTypes';

export default (state = '', action) => {

  switch (action.type) {

    case ADD_ENTRY:
      return '';

    case SEARCH_ENTRY:
      return action.payload.text;

    default:
      return state;
  }
};