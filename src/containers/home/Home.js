import React from 'react';
import './Home.scss';
import '../../components/itemcount/ItemCount';
import ReturnProducts from '../../db/Products'

const Home = ({greeting}) => {
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
               <ReturnProducts />
            </div>
            <div className="statusbar">
               <div className="left">object(s)</div>
               <div className="right">&nbsp;</div>
            </div>
            </div>
      </div>
   );
}
export default Home;
