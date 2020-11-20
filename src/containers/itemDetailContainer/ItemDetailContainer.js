import React from 'react';
import './ItemDetailContainer.scss';
import ReturnProducts from '../../db/Products'
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
   return (
      <div className="container">
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
               <ReturnProducts />  
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
export default ItemDetailContainer;
