import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="navbar-color" collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <Image
                className=""
                responsive
                width={150}
                src="/images/logo-letras.png"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">
              Contacto
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
