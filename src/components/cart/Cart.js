import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import './Cart.scss';

const Cart = () => {
   const { cartItems } = useCartContext();
    return (
      <div className="container cart">
         <div className="products single">
            <div className="title">
               <h1><div className="icon-my-computer"></div>Carrito</h1>
            </div>
            <ul className="toolbar">
               <li><u>F</u>ile</li>
               <li><u>E</u>dit</li>
               <li><u>V</u>iew</li>
               <li><u>H</u>elp</li>
            </ul>
            <div className="container-inner">
               <h2>Tu compra</h2>
               {Object.keys(cartItems).length > 0 ? 
                  cartItems.map((item) => (
                     <p>{item.name} (x{item.quantity})</p>
                  ))            
               : 'No hay productos en el carrito :(' }
            </div>
            <div className="statusbar">
               <Link to={`/`}>
                  <div className="left">Volver a productos</div>
               </Link>
               <div className="right">&nbsp;</div>
            </div>
         </div>
      </div>
    )
 }
export default Cart;
