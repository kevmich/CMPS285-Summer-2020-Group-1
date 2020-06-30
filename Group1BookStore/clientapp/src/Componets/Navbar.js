import React, { useState } from 'react';
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

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TheBookcase</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Search
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Books
                </DropdownItem>
                <DropdownItem>
                  Toys
                </DropdownItem>
                <DropdownItem>
                  Movies
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem>
          <NavLink href = '/Login'>Login</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavabar;