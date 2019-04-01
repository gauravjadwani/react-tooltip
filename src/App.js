import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './Tooltip.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tooltip style={{}} parentClass={"tooltip"}
        childClass={"tooltiptext"} childrenElement={<span>"hover me"</span>}
        tooltipText={"hover"}/>
      </div>
    );
  }
}

export default App;
