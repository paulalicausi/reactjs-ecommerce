import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({product}) => {
    return (
        <div className="product col-12 col-md-4">
            <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name} <small>${product.price}</small></h3>
                    <p>{product.description}</p>
            </Link>
        </div>
    );
 }
export default Item;
