import React, { Component } from 'react';
import solution from './tasks/1/task1.js';

class App extends Component {

  componentDidMount() {
    solution(2);
  }

  render() {
    return (
      <div className="App">
        app
      </div>
    );
  }
}

export default App;
