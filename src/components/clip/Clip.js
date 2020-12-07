import React from "react";
import './Clip.scss';
import clip from '../../assets/img/clip.png';

const Clip = () => {
 
   return (
       <div className="clipContainer">
            <div className="globe">
                <p>Hola, soy el Clip tu asistente en Win95 Shop, ¿en qué puedo ayudarte?</p>
            </div>
            <img src={clip} />
       </div>
   );
}
export default Clip;
