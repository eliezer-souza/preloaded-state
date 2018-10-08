export const Types = {
  INCREMENT: 'COUNTER/INCREMENT',
  DECREMENT: 'COUNTER/DECREMENT'
}

export const INITIAL_STATE = {
  counter: 0,
  text: "",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.INCREMENT:
      return {...state, counter: state.counter + 1 };
    case Types.DECREMENT:
      return {...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
