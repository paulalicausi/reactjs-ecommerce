import { Divider } from '@material-ui/core';
import React from 'react';
import './Home.scss';

const Home = ({greeting}) => {
   return (
   <div className="mainTitle_container">
      <h1 className="mainTitle">{greeting}</h1>
   </div>
   );
}

export default Home;
