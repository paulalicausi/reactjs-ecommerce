import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../components/itemcount/ItemCount';
import ItemCount from '../../components/itemcount/ItemCount';
import ItemList from '../../components/itemList/ItemList';
import arbol from '../../assets/img/products/arbol.png';
import carpeta from '../../assets/img/products/carpeta.png';
import mundo from '../../assets/img/products/mundo.png';
import libro from '../../assets/img/products/libro.png';
import notepad from '../../assets/img/products/notepad.png';
import recycle from '../../assets/img/products/recycle.png';

const products = [
   {
      id: '1',
      name: 'Árbol',
      description: 'En la vida, hay que plantar un árbol, ¿por qué no empezar con este arbolito de pixeles? Lo bueno: no hay que regarlo.',
      img: arbol,
      price: 5000
   },
   {
       id: '2',
       name: 'Carpeta',
       description: 'Acá podrás guardar todos tus GB de archivos inservibles. Mejor que pagar Google Drive, ¿no?',
       img: carpeta,
       price: 45
    },
    {
       id: '3',
       name: 'Libro',
       description: 'Una fuente de conocimiento. Y de dudas',
       img: libro,
       price: 10000
    },
    {
       id: '4',
       name: 'Mundo',
       description: 'El mundo. Sí, a tan sólo un click puede ser tuyo. Incluye lupa de regalo.',
       img: mundo,
       price: 3
    },
    {
       id: '5',
       name: 'Block de notas',
       description: 'Para anotar todas las dudas que te genere el libro.',
       img: notepad,
       price: 200
    },
    {
      id: '6',
      name: 'Papelera de reciclaje',
      description: 'Sirve para que guardes todos tus proyectos jQuery.',
      img: recycle,
      price: 0.5
   }
];

const Home = ({greeting}) => {
   const [prod, setProducts] = useState();

   useEffect(() => {
      getProducts();
    }, []);

   const getProducts = () => {
      const promiseProducts = new Promise(resolve => {
         setTimeout(() => {
            resolve(products);
         }, 3000)        
      });
      promiseProducts.then((result) => {
         setProducts(result);
      });
   }
   const ReturnProducts = () => {
      if(!prod){
         return <p className="loading">Cargando...</p>;
      }
      return <ItemList products={products} /> ;
   }

   return (
      <div className="container">
         <div className="mainTitle_container">
            <h1 className="mainTitle">{greeting}</h1>
            <ItemCount min="0" max="5" />
         </div>
         <div className="products">
            <div className="title">
               <div className="pull-right">
                  <button className="minimize"></button>
                  <button className="expand"></button>
                  <button className="times"></button>
               </div>
               <h1><div className="icon-my-computer"></div> Productos</h1>
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
               <div className="left">{products.length} object(s)</div>
               <div className="right">&nbsp;</div>
            </div>
            </div>
      </div>
   );
}

export default Home;
