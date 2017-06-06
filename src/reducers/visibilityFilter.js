import actions from '../actions';

const visibilityFilter = (state = [], action) => {
  switch (action.type) {
    case actions.setFilterType:
      {
        console.log('=====setFilterType');
        return state;
      }
    default:
      return state;
  }
}

export default visibilityFilter;