import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar.js';
import Login from './Componets/Login.js';
import Books from './Componets/Books';
import Toys from './Componets/Toys';
import Movies from './Componets/Movies';
import About from './Componets/About';
import Home from './Componets/Home';
import Cart from './Componets/Cart';
import Checkout from './Componets/Checkout';
import {Provider} from 'react-redux';
import store from './store.js';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/toys" component={Toys} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/checkout" component={Checkout}/>
      
      

      </Switch>
     
    </div>
    </Provider>
  );
}

export default App;
