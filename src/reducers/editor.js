import {
  ADD_ENTRY,
  EDIT_ENTRY,
  SAVE_ENTRY,
  DELETE_ENTRY,
  SEARCH_ENTRY
} from '../constants/ActionTypes';

const defaultState = {
  key: '',
  value: '',
  index: null,
  initialValue: ''
};

export default (state = {...defaultState}, action) => {

  switch (action.type) {

    case ADD_ENTRY:
      return {
        ...defaultState,
        key: action.payload.text,
        initialValue: action.payload.text
      };

    case EDIT_ENTRY:
      return {
        ...state,
        key: action.payload.key,
        value: action.payload.value,
        index: action.payload.index
      };

    case SAVE_ENTRY:
    case DELETE_ENTRY:
      return {
        ...defaultState
      };

    case SEARCH_ENTRY:
      return {
        ...defaultState,
        initialValue: action.payload.text
      };

    default:
      return state;
  }
};