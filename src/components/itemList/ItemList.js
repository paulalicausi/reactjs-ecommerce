import React from 'react';
import Item from '../item/Item';

const ItemList = ({products}) => {
   return (
    <div className="row">
        {products.map(p =>(
         <Item product={p}/>
        ))}
    </div>
   );
}
export default ItemList;
