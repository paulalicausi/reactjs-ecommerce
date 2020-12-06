import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/img/cart.png';
import './CartIcon.scss';
import useCartContext from '../../context/CartContext';

const CartIcon = () => {
   const { ItemCount } = useCartContext();
   return (
      <Link to="/cart">
         <div className="cart-icon">
            <img src={cart} alt="logo" />
            <p>Tu compra ({ItemCount()})</p>
         </div>
      </Link>
      );
}

export default CartIcon;
