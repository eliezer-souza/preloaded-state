import { createStore, combineReducers } from 'redux'
import counter, { INITIAL_STATE } from './counterReducer';
import todos from './todosReducer';
import axios from 'axios';

const app = combineReducers({
  counter,
  todos
});

function getCounter() {
  try {
    const response = axios.get('http://localhost:3003/counter');
    return response;
  } catch (error) {
    console.error(error);
  }
}

const configureStore = getCounter().then((response) => {
    const preloadedState = { counter: Object.assign(INITIAL_STATE, response.data) };
    const store = createStore(app, preloadedState);
  
    console.log(store.getState());
  
    store.subscribe(() => {
      console.log(store.getState());
    });
    
    return store;
});

export default configureStore;
