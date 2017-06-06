import actions from '../actions';

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case actions.setFilterType:
      {
        return action.filterType;
      }
    default:
      return state;
  }
}

export default visibilityFilter;