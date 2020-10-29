import React from 'react';
import './NavBar.scss';
import CartIcon from './../carticon/CartIcon';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
   return (
      <Navbar expand="lg">
         <Navbar.Brand href="#home">
            <CartIcon />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <Nav.Link href="#home">Inicio</Nav.Link>
               <Nav.Link href="#link">Productos</Nav.Link>
               <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
export default NavBar;