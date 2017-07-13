import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>Car <i>Sales</i> </h2>
        </div>

        <div>
          <ul>
              <li>
                  <img src={require('./images/hyundai.png')}/>
                  <h3>Hyundai i30, from: $22,990</h3>
              </li>
              <li>
                  <img src={require('./images/mazda3.png')}/>
                  <h3>Mazda 3, from: $24,127</h3>
              </li>
              <li>
                  <img src={require('./images/suzuki_baleno.png')}/>
                  <h3>Suzuki Baleno, from: 16,990$</h3>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
