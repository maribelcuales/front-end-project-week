import React, { Component } from 'react';
import { Button } from 'reactstrap'; 

import './App.css';
import ListView from './components/ListView.js';

class App extends Component {
  render() {
    return (
      <div className="App">      
          <ListView />       
      </div>
    );
  }
}

export default App;
