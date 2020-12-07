import React, { useState } from "react";
import ItemCount from '../itemcount/ItemCount';
import useCartContext from '../../context/CartContext';

const ItemDetail = ({product}) => {
    const { handleCartItems } = useCartContext();
    const [quantity, setQuantity] = useState(1);

    const itemQuantity = (value) => {
        setQuantity(value);
    }

    const addTo = () => {
        handleCartItems({id: product.id, name: product.name, price: product.price}, quantity);
    }

    return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="item-title">{product.name}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <ItemCount min={1} max={5} onAdd={itemQuantity} />
                    <button onClick={addTo} className="buy">Añadir al carrito {quantity}</button>
                </div>
            </div>
    );
 }
export default ItemDetail;
