import { SAVE_ENTRY, DELETE_ENTRY } from '../constants/ActionTypes';

export default (state = [], action) => {

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
        ...state.slice(action.payload.index + 1, state.length),
        {
          key: action.payload.key,
          value: action.payload.value
        }
      ];

    case DELETE_ENTRY:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1, state.length)
      ];

    default:
      return state;
  }
};