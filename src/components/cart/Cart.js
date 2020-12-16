import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import './Cart.scss';
import deleteIcon from '../../assets/img/delete.png';

const Cart = () => {
   const { cartItems, deleteItem, totalPrice, buyItems, setLastname, setName, setEmail, error, orderId } = useCartContext();
   const history = useHistory();
   if(orderId) {
      history.push("/checkout");
   }

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
               <div className="d-none d-md-flex row titulo">
                  <div className="col-12 col-md-4">
                     <p>Producto(s)</p>
                  </div>
                  <div className="col-12 col-md-3">
                     <p>Precio por unidad</p>
                  </div>
                  <div className="col-12 col-md-3">
                     <p>Subtotal</p>
                  </div>
                  <div className="col-12 col-md-2">
                     <p>Eliminar item</p>
                  </div>
               </div>
               {Object.keys(cartItems).length > 0 ? 
                  cartItems.map((item) => (
                     <div key={item.id} className="row">
                        <div className="col-12 col-md-4">
                           <p>{item.name} (x{item.quantity})</p>
                        </div>
                        <div className="col-12 col-md-3">
                           <p>${item.price}</p>
                        </div>
                        <div className="col-12 col-md-3">
                           <p>${item.price * item.quantity}</p>
                        </div>
                        <div className="col-12 col-md-2">
                           <button onClick={() => {deleteItem(item.id)}}>
                              <img src={deleteIcon} alt="Delete Icon" />
                           </button>
                        </div>
                     </div>
                  ))            
               : 'No hay productos en el carrito :('}
               <p className="mt-2"><b>Total: ${totalPrice() ? totalPrice() : 0}</b></p>
               <h2>Tus datos</h2>
               <form>
                  <div className="row">
                     <div className="col-6">
                        <input type="text" className="form-control" placeholder="Nombre" onChange={event => setName(event.target.value)} />
                     </div>
                     <div className="col-6">
                        <input type="text" className="form-control" placeholder="Apellido" onChange={event => setLastname(event.target.value)} />
                     </div>
                     <div className="col-6">
                        <input type="text" className="form-control" placeholder="E-mail" onChange={event => setEmail(event.target.value)}/>
                     </div>
                     <div className="col-6">
                        <input type="text" className="form-control" placeholder="Confirmar e-mail" />
                     </div>
                     <button onClick={buyItems}>Realizar compra</button>
                  </div>
                  <p className="error">{error ? error : ''}</p>
                  </form>
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
