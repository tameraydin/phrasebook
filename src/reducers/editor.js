import { ADD_ENTRY, EDIT_ENTRY, SEARCH_ENTRY } from '../constants/ActionTypes';

const defaultState = {
  key: '',
  value: '',
  index: null
};

export default (state = {...defaultState}, action) => {

  switch (action.type) {

    case ADD_ENTRY:
      return {...defaultState, key: action.payload.text};

    case EDIT_ENTRY:
      return {
        ...defaultState,
        key: action.payload.key,
        value: action.payload.value,
        index: action.payload.index
      };

    case SEARCH_ENTRY:
      return {...defaultState};

    default:
      return state;
  }
};