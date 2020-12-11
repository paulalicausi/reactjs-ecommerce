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
               <Nav.Link>
                  <Link to="/">   
                     Inicio
                  </Link>
               </Nav.Link>
               <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                     <Link to="/products/estudio">   
                        Estudio
                     </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                     <Link to="/products/naturaleza">   
                        naturaleza
                     </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                     <Link to="/products/tecnologia">   
                        Tecnología
                     </Link>
                  </NavDropdown.Item>
               </NavDropdown>
               <Nav.Link>
                  <Link to="/cart">   
                     carrito
                  </Link>
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
export default NavBar;
