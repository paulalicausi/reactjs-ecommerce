import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import paimg from '../../assets/img/products/recycle.png';
import './ItemDetailContainer.scss';

const papelera = 
   {
      id: '6',
      name: 'Papelera de reciclaje',
      description: 'Sirve para que guardes todos tus proyectos jQuery.',
      img: paimg,
      price: 0.5
}


const ItemDetailContainer = (product) => {
   const [prod, setProduct] = useState();

   useEffect(() => {
      getProduct();
    }, []);

   const getProduct = () => {
      const promiseProduct = new Promise(resolve => {
         setTimeout(() => {
            resolve(product);
         }, 3000)        
      });
      promiseProduct.then((result) => {
         setProduct(result);
      });
   }
   const ReturnProduct = () => {
      if(!prod){
         return <p className="loading">Cargando...</p>;
      }
      return <ItemDetail product={papelera} />;
   }

   return (
      <div className="container">
         <div className="products single">
            <div className="title">
               <div className="pull-right">
                  <button className="minimize"></button>
                  <button className="expand"></button>
                  <button className="times"></button>
               </div>
               <h1><div className="icon-my-computer"></div>Producto</h1>
            </div>
            <ul className="toolbar">
               <li><u>F</u>ile</li>
               <li><u>E</u>dit</li>
               <li><u>V</u>iew</li>
               <li><u>H</u>elp</li>
            </ul>
            <div className="container-inner">
               <ReturnProduct />  
            </div>
            <div className="statusbar">
               <div className="left">Volver a productos</div>
               <div className="right">&nbsp;</div>
            </div>
         </div>
      </div>
   );
 }
export default ItemDetailContainer;
