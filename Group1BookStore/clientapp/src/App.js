import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar.js';
import Login from './Componets/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
