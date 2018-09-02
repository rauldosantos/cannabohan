import React from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

class Header extends React.Component {
    render () {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/"><span className="text-color-nav">CANNABOHAN</span></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/products/all">
                            Productos
                        </NavItem>
                        <NavDropdown eventKey={3} title="Marcas" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>E-Grow</MenuItem>
                            <MenuItem eventKey={3.2}>Crece Crece</MenuItem>
                            <MenuItem eventKey={3.3}>Sustrato Del Paso</MenuItem>
                            <MenuItem eventKey={3.3}>Bio Fértil</MenuItem>
                            
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={2} href="#">
                        Contacto
                    </NavItem>
                    
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
        )
    }
}
export default Header;
