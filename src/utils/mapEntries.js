export const mapEntries = state => {
  let searchText = state.search.trim();
  let entries = state.entries.map(_addIndex);

  if (state.editor.index !== null) {
    entries = entries.filter(_isEntryBeingEdited(state.editor.index));
  }

  if (searchText) {
    entries = entries.filter(_getContainsFunc(searchText));
  }

  return {
    entries: entries.reverse()
  };
};

const _getContainsFunc = word => {
  word = word && word.toLowerCase();

  return entry => {
    let key = entry.key && entry.key.toLowerCase();
    let value = entry.value && entry.value.toLowerCase();

    return key.indexOf(word) > -1 || value.indexOf(word) > -1;
  };
};

const _isEntryBeingEdited = editIndex => {
  return entry => {
    return editIndex === null || entry.index !== editIndex;
  };
};

const _addIndex = (entry, idx) => {
  return {...entry, index: idx}
};

export default mapEntries;
