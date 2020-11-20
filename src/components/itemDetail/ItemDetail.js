import React from 'react';
import ItemCount from '../itemcount/ItemCount';

const itemQuantity = (value) => {
    console.log(value);
}

const ItemDetail = ({product}) => {
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="col-12 col-md-6">
                <h1 className="item-title">{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <ItemCount min={1} max={5} onAdd={itemQuantity} />
                <button className="buy">Comprar</button>
            </div>
        </div>
    );
 }
export default ItemDetail;
