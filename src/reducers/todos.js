import actions from '../actions';

let nextTodoId = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case actions.addTodo:
      {
        return [
          ...state,
          {
            id: nextTodoId++,
            text: action.text,
            completed: false,
          }
        ];
      }
    case actions.toggleTodo:
      {
        return state.map(todo => {
          (todo.id === action.id) ?
            {...todo, completed: !todo.completed} : todo;
        });
        return state;
      }
    default:
      return state
  }
}

export default todos