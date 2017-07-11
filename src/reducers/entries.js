import { ADD_ENTRY, EDIT_ENTRY, SAVE_ENTRY, DELETE_ENTRY } from '../constants/ActionTypes';

const _data = [
  {
    'key': 'Lorem ipsum',
    'value': 'Dolor met'
  }, {
    'key': 'Lorem ipsum',
    'value': 'Dolor met'
  }, {
    'key': 'Lorem ipsum',
    'value': 'Dolor met'
  }
];

export default (state = _data, action) => {

  switch (action.type) {
    case ADD_ENTRY:
      return state;
    case EDIT_ENTRY:
      return state;
    case SAVE_ENTRY:
      return state;
    case DELETE_ENTRY:
      return state;
    default:
      return state;
  }
};