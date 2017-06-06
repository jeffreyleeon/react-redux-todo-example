import actions from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case actions.addTodo:
      {
        console.log('=====add todo');
        return state;
      }
    case actions.toggleTodo:
      {
        console.log('=====toggle todo');
        return state;
      }
    default:
      return state
  }
}

export default todos