import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar.js';
import Login from './Componets/Login.js';
import Books from './Componets/Books';
import Toys from './Componets/Toys';
import Movies from './Componets/Movies';


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
      <Route exact path="/books" component={Books} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/toys" component={Toys} />
      

      </Switch>
     
    </div>
  );
}

export default App;
