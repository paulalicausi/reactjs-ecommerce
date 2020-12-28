import React from 'react';
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <Navbar>
         <Navbar.Brand>
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </Navbar.Brand>
            <Nav>
               <Link to="/">   
                  Inicio
               </Link>
               <NavDropdown title="Productos" id="basic-nav-dropdown">
                     <Link className="dropdown-item" to="/products/estudio">   
                        Estudio
                     </Link>
                     <Link className="dropdown-item" to="/products/naturaleza">   
                        naturaleza
                     </Link>
                     <Link className="dropdown-item" to="/products/tecnologia">   
                        Tecnología
                     </Link>
               </NavDropdown>
               <Link to="/cart">   
                  carrito
               </Link>
            </Nav>
      </Navbar>
   );
}
export default NavBar;
