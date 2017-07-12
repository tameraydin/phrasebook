import { ADD_ENTRY, SAVE_ENTRY, SEARCH_ENTRY } from '../constants/ActionTypes';

export const addEntry = text => {
  return {
    type: ADD_ENTRY,
    payload: { text }
  };
};

export const saveEntry = (key, value, index) => {
  return {
    type: SAVE_ENTRY,
    payload: { key, value, index }
  };
};

export const searchEntry = text => {
  return {
    type: SEARCH_ENTRY,
    payload: { text }
  };
};