import { combineReducers } from 'redux';
import mode from './mode';
import entries from './entries';
import search from './search';

const phraseBook = combineReducers({
  mode,
  entries,
  search
});

export default phraseBook;