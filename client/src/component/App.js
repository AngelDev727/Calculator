// my imports
import React from 'react';
import './App.css';
import Display from './Display';
import BtnPanel from './BtnPanel';
import calculate from '../calc/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  // add props for event handler
  handleClick = (btnName) => {
    this.setState(calculate(this.state, btnName));
  }

  render() {
    return (
      <div className="App">
        {/* Rendered Components */}
        <Display 
          value = {this.state.next || this.state.total || '0'}
        />
        <BtnPanel 
          clickHandler = {this.handleClick}
        />
      </div>
    );
  }
}

export default App;
