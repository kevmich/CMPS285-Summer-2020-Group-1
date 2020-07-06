import React, { useState } from 'react';
import "./Navbar.css";
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
  <div className = 'navbar-effects'>
      <Navbar color="light" light expand="lg">
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
                   <a class="nav-link" href="/movies">Movies</a>
               </li>
               <li class="nav-item">
                     <a class="nav-link" href="/toys">Toys</a>
               </li>
                </ul>

                <ul className="right">
                
            </ul>
          </div>
          
          </Nav>
          
        </Collapse>
        <li><Link to="/login">Login</Link></li>
      </Navbar>
    </div>
  );
}

export default MyNavabar;