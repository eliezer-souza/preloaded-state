export const Types = {
  ADD: 'TODO/ADD',  
}

const INITIAL_STATE = {
  todos: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.ADD:
      return {...state, todos: state.todos };
    default:
      return state;
  }
}
