import React, { useState} from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getAction';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { useEffect } from 'react';

const MyNavabar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    getNumbers();
  }, [])


  return(
  <div>
      <Navbar expand="lg">
        <NavbarBrand href="/">The Bookcase</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="nav-wrapper">
             <div className="container">
          <ul class="nav nav-tabs">
             <li class="nav-item">
                 <a class="nav-link active" href="/books">Books</a>
             </li>
               <li className="nav-item">
                   <a className="nav-link active" href="/movies">Movies</a>
               </li>
               <li className="nav-item">
                     <a className="nav-link active" href="/toys">Toys</a>
               </li>
                </ul>

                <ul className="right">
                
            </ul>
          </div>
          
          </Nav>
          
        </Collapse>
        <Link to="/login"> 
        <button style= {{marginRight: 5 +"px"}}className="btn btn-success float-left">Login</button>  </Link>
        <Link to="/cart">
        <button className="btn btn-primary float-right">
        <ion-icon name="cart-outline"></ion-icon>
          Cart<span>({props.basketProps.basketNumbers})</span> </button>
          </Link>
         
      </Navbar>
    </div>
  );
}
      


const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{getNumbers})(MyNavabar);