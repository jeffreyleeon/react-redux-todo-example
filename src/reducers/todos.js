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
        const ret = state.map(todo => {
          if (todo.id === action.id) {
            return {...todo, completed: !todo.completed}
          } else {
            return todo;
          } 
        });
        return ret;
      }
    default:
      return state
  }
}

export default todos