import React from 'react';
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <Navbar expand="lg">
         <Navbar.Brand>
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <Nav.Link href="/">Inicio</Nav.Link>
               <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/products/estudio">Estudio</NavDropdown.Item>
                  <NavDropdown.Item href="/products/naturaleza">Naturaleza</NavDropdown.Item>
                  <NavDropdown.Item href="/products/tecnologia">Tecnología</NavDropdown.Item>
               </NavDropdown>
               <Nav.Link href="/cart">Carrito</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
export default NavBar;
