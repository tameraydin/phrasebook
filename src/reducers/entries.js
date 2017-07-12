import { SAVE_ENTRY, DELETE_ENTRY } from '../constants/ActionTypes';

const _data = [
  {
    'key': 'Lorem ipsum',
    'value': 'Dolor met'
  }
];

export default (state = _data, action) => {

  switch (action.type) {

    case SAVE_ENTRY:
      if (action.payload.index === null) {
        return [
          ...state,
          {
            key: action.payload.key,
            value: action.payload.value
          }
        ];
      }

      return [
        ...state.slice(0, action.payload.index),
        {
          key: action.payload.key,
          value: action.payload.value
        },
        ...state.slice(action.payload.index, state.length)
      ];

    case DELETE_ENTRY:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index, state.length)
      ];

    default:
      return state;
  }
};