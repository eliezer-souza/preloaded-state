import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Types } from './store/counterReducer';

class App extends Component {
  increment = () => (
    this.props.dispatch({ type: Types.INCREMENT })
  );

  decrement = () => (
    this.props.dispatch({ type: Types.DECREMENT })
  );

  render() {
    return (
        <div>
          <h1>{this.props.counter}</h1> 
          <button onClick={this.increment}>Increment</button>   
          <button onClick={this.decrement}>Decrement</button>
        </div>
    );
  }
}

export default connect(state => state.counter)(App);
