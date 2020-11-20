import React, { useState, useEffect } from 'react';
import arbol from '../assets/img/products/arbol.png';
import desk from '../assets/img/products/desk.png';
import mundo from '../assets/img/products/mundo.png';
import libro from '../assets/img/products/libro.png';
import notepad from '../assets/img/products/notepad.png';
import recycle from '../assets/img/products/recycle.png';
import ItemList from '../components/itemList/ItemList';
import ItemDetail from '../components/itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

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
        name: 'Escritorio',
        description: 'La imagen es sólo ilustrativa.',
        img: desk,
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
 
 const ReturnProducts = () => {
   const [prod, setProducts] = useState();
   const { id } = useParams();

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

   if(!prod){
      return <p className="loading">Cargando...</p>;
   }

   if(id) {
      return (
         <div>
            {products.map(p =>{
               if(p.id === id) {
                 return <ItemDetail product={p} />
                }
            })}
         </div>
      )
   }else {
      return <ItemList products={products} />;
   }
}
 export default ReturnProducts;