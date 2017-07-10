export default (mode = 'search', action) => {

  switch (action.type) {

    case 'ADD_PHRASE':
      return 'add';

    case 'EDIT_PHRASE':
      return 'edit';

    default:
      return mode;
  }
};
