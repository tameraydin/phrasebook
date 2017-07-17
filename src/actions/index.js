import {
  SET_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  SAVE_ENTRY,
  DELETE_ENTRY,
  SEARCH_ENTRY,
  SET_MODE
} from '../constants/ActionTypes';

export const setEntries = entries => {
  return {
    type: SET_ENTRIES,
    payload: { entries }
  };
};

export const addEntry = text => {
  return {
    type: ADD_ENTRY,
    payload: { text }
  };
};

export const editEntry = (key, value, index) => {
  return {
    type: EDIT_ENTRY,
    payload: { key, value, index }
  };
};

export const saveEntry = (key, value, index) => {
  return {
    type: SAVE_ENTRY,
    payload: { key, value, index }
  };
};

export const deleteEntry = (index) => {
  return {
    type: DELETE_ENTRY,
    payload: { index }
  };
};

export const searchEntry = text => {
  return {
    type: SEARCH_ENTRY,
    payload: { text }
  };
};

export const setMode = mode => {
  return {
    type: SET_MODE,
    payload: { mode }
  };
};