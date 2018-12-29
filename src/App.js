import React, { Component } from 'react';

import NavbarHeader from './navbarhead';
import Form1 from './Form1';
import './App.css';
import Mount from './Mount';
class App extends Component {
  render() {
    return (
        <div className="container">
          <NavbarHeader />
          <Form1 />
          <Mount />
        </div>
    )
  }
}

export default App;
