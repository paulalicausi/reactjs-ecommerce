import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.scss';
import { Link } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { getFirebase, getFirestore } from '../../firebase';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
   const [productId, setProductId] = useState();
   const {id} = useParams();
  useEffect(() =>{
   const db = getFirestore();
   const productCollection = db.collection("products");
   const filterByProduct = productCollection.where("id", "==", id);
      filterByProduct.get().then((response) => {
          const aux = response.docs.map(element => {
              return element.data();
          });
          setProductId(aux[0]);
      });
   }, []);

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
               {productId ? <ItemDetail product={productId} /> : 'Cargando...'}            
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
