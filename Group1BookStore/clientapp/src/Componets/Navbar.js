import React, { useState } from 'react';

import { Link } from 'react-router-dom';

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

const MyNavabar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
               <li class="nav-item">
                   <a class="nav-link active" href="/movies">Movies</a>
               </li>
               <li class="nav-item">
                     <a class="nav-link active" href="/toys">Toys</a>
               </li>
                </ul>

                <ul className="right">
                
            </ul>
          </div>
          
          </Nav>
          
        </Collapse>
        <Link to="/login"> 
        <button className="btn btn-secondary float-left">Login</button> </Link>
        <Link to="/cart">
        <button className="btn btn-primary float-right">Cart</button></Link>
      </Navbar>
    </div>
  );
}
      


export default MyNavabar;