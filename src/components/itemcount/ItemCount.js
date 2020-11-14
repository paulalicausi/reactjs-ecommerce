import React, { useState } from "react";
import './ItemCount.scss';

const ItemCount = ({min, max}) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
      if(contador < max) {
        setContador(contador + 1);
      }
    };
    const restar = () => {
      if(contador > min) {
        setContador(contador - 1);
      }
    };

   return (
    <div>
      <p>¿Cuántos ítems queres?</p>
      <div className="cantidad">
        <button className="less" onClick={restar}> - </button>
        <input type="number" value={contador} />
        <button className="more" onClick={sumar}> + </button>
      </div>
    </div>
   );
}
export default ItemCount;
