import React from 'react';
import logo from '../../logo.svg';
import './NavBar.scss';

function NavBar() {
   return (
      <nav>
         <img src={logo} alt="logo" />
         <ul>
            <li>
               <a>Inicio</a>
            </li>
            <li>
               <a>Productos</a>
            </li>
            <li>
               <a>Contacto</a>
            </li>
         </ul>
      </nav>
   );
}
export default NavBar;
