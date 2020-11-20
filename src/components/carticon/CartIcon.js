import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/img/cart.png';
import './CartIcon.scss';

const CartIcon = () => {
   return (
      <Link to="/cart">
         <div className="cart-icon">
            <img src={cart} alt="logo" />
            <p>Tu compra (0)</p>
         </div>
      </Link>
      );
}

export default CartIcon;
