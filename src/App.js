import React, { Component } from 'react';

import './App.css';
import Results from './Result.js'

class App extends Component {
constructor()
{
  super()
  this.state = {operation: []}
}

  render() {
    return (
      <div className="App">
        <Results /> 
        
      </div>
     
    );
  }
}

export default App;
