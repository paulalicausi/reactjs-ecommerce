import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import useCartContext from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import './Checkout.scss';

// eslint-disable-next-line
const Checkout = ({}) => {
   const { orderId, newOrder } = useCartContext();
   const [order, setOrder] = useState();
   const history = useHistory();

   if(!orderId) {
        history.push("/");
    }

    useEffect(() => {
        const db = getFirestore();
        const ordersCollection = db.collection("orders");
        const getOrderById = ordersCollection.doc(orderId); 
            getOrderById.get().then((response) => {      
            setOrder({id: response.id, ...response.data()});
        });
    }, [orderId]);

    return (
    <div className="container checkout">
        <div className="products single">
            <div className="title">
                <h1><div className="icon-my-computer"></div>Producto</h1>
            </div>
            <ul className="toolbar">
                <li><u>F</u>ile</li>
                <li><u>E</u>dit</li>
                <li><u>V</u>iew</li>
                <li><u>H</u>elp</li>
            </ul>
            <div className="container-inner">
                {order ?
                    <>
                        <h2>¡Tu compra ha sido realizada con éxito!</h2>
                        <h3>Datos personales:</h3>
                        <p><b>Nombre:</b> {order.buyer.name}</p>
                        <p><b>Apellido:</b> {order.buyer.lastname}</p>
                        <p><b>E-mail:</b> {order.buyer.email}</p>
                        <h3>Detalles de la compra:</h3>
                        {order.items.map((item) => (
                            <p key={item.name}><b>{item.name}:</b> x{item.quantity} | ${item.price}</p>
                        ))}
                        <hr/>
                        <p><b>ID de compra:</b> {order.id}</p>
                        <p><b>Total:</b> ${order.total}</p>
                        <h2>¡Gracias por elegirnos!</h2>
                        <button onClick={newOrder}>Nueva compra</button>
                    </> 
                : 'Procesando datos...'}
            </div>
            <div className="statusbar">
                <Link to={`/`}>
                    <div className="left">Volver a productos</div>
                </Link>
                <div className="right">&nbsp;</div>
            </div>
        </div>
    </div>
   );
}
export default Checkout;
