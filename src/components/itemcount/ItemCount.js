import React, { useState } from "react";
import './ItemCount.scss';

const ItemCount = ({min, max, onAdd}) => {
  const [counter, SetCounter] = useState(1);

  const more = () => {
      let increase = counter + 1; 
      if(counter < max) {
        SetCounter(increase);
        onAdd(increase);
      } 
  };
  
  const less = () => {
      let decrease = counter - 1;
      if(counter > min) {
        SetCounter(decrease);
        onAdd(decrease);
      }
  };
  
   return (
      <div className="cantidad">
        <button className="less" onClick={less}> - </button>
        <input type="number" value={counter} />
        <button className="more" onClick={more}> + </button>
      </div>
   );
}
export default ItemCount;
