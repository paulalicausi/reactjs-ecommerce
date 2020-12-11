import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../components/itemcount/ItemCount';
import { getFirestore } from '../../firebase';
import ItemList from '../../components/itemList/ItemList';

const Home = ({greeting}) => {
   const [products, setProducts] = useState();

   useEffect(() =>{
      const db = getFirestore();
      const productCollection = db.collection("products");
      productCollection.get().then((response) => {
          const aux = response.docs.map(element => {
              return element.data();
          })
          setProducts(aux);
      });
  }, []);

   return (
      <div className="container">
         <div className="mainTitle_container">
            <h1 className="mainTitle">{greeting}</h1>
         </div>
         <div className="products">
            <div className="title">
               <h1><div className="icon-my-computer"></div> Productos</h1>
            </div>
            <ul className="toolbar">
               <li><u>F</u>ile</li>
               <li><u>E</u>dit</li>
               <li><u>V</u>iew</li>
               <li><u>H</u>elp</li>
            </ul>
            <div className="container-inner">
               {products ? <ItemList products={products} /> : 'Cargando...' }
            </div>
            <div className="statusbar">
               <div className="left">6 object(s)</div>
               <div className="right">&nbsp;</div>
            </div>
            </div>
      </div>
   );
}
export default Home;
