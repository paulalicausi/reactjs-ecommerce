import { Divider } from '@material-ui/core';
import React from 'react';
import './Home.scss';

const Home = ({greeting, children}) => {
   return (
   <div className="mainTitle_container">
      <h1 className="mainTitle">{greeting}</h1>
      {children}
   </div>
   );
}

export default Home;
