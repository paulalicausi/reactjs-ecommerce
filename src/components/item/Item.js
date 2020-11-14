import React from 'react';
import './Item.scss';

const Item = ({product}) => {
    return (
    <div key={product.id} className="product col-12 col-md-4">
        <img src={product.img}></img>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
    </div>
    );
 }
export default Item;
