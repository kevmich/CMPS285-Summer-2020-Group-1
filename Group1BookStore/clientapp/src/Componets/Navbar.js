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
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">The Bookcase</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="nav-wrapper">
             <div className="container">
          <ul className="nav nav-tabs">
          <li className="nav-item">
                 <a className="nav-link active" href="/about">About</a>
             </li>
             <li className="nav-item">
                 <a className="nav-link active" href="/books">Books</a>
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
        <li><Link to="/login"> Login </Link></li>
        <li><Link to="/cart">
        <ion-icon name="cart-outline"></ion-icon>
          Cart<span>{props.basketProps.basketNumbers}</span></Link></li>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{getNumbers})(MyNavabar);