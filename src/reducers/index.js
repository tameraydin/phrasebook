import { combineReducers } from 'redux';
import mode from './mode';
import editor from './editor';
import entries from './entries';
import search from './search';

const phraseBook = combineReducers({
  mode,
  editor,
  entries,
  search
});

export default phraseBook;