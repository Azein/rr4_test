import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const YoloTacos  = () => (
  <div>
    Yay Yolo Tacos
  </div>
)

const Tacos  = ({ match }) => (
  <div>
    <div>Tacos container</div>
    <Link to='/tacos/yolo'>GET YOLO TACOS</Link>
    <Route
      path={match.url + '/yolo'}
      component={YoloTacos}
    />
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>RR4 testing</h2>
          </div>
          <Link to='/tacos'>GET TACOS</Link>
          <Route path="/tacos" component={Tacos}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
