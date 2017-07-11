import { SEARCH_ENTRY, ADD_ENTRY } from '../constants/ActionTypes';

export const addEntry = text => {
  return {
    type: ADD_ENTRY,
    payload: { text }
  };
};

export const searchEntry = text => {
  return {
    type: SEARCH_ENTRY,
    payload: { text }
  };
};