import React, { useState, useEffect } from 'react';
import '../../components/itemcount/ItemCount';
import { getFirestore } from '../../firebase';
import ItemList from '../../components/itemList/ItemList';
import { Link, useParams } from 'react-router-dom';

const ProductsContainer = () => {
   const [products, setProducts] = useState();
   const { category } = useParams();

   useEffect(() =>{
      const db = getFirestore();
      const productCollection = db.collection("products");
      const filterByCategory = productCollection.where("category", "==", category);
      filterByCategory.get().then((response) => {
          const aux = response.docs.map(element => {
              return element.data();
          })
          setProducts(aux);
      });
  }, [category]);

   return (
      <div className="container">
         <div className="products">
            <div className="title">
               <h1><div className="icon-my-computer"></div> Productos ({category})</h1>
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
                <Link to={`/`}>
                  <div className="left">Volver a productos</div>
               </Link>
               <div className="right">&nbsp;</div>
            </div>
            </div>
      </div>
   );
}
export default ProductsContainer;
