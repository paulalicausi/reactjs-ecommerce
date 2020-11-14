import React from 'react';
import './Footer.scss';
import start from '../../assets/img/start.png';
import sound from '../../assets/img/sound.png';

const Footer = () => {
    return (
    <div className="start-bar"> 
        <div className="start-button">
           <img src={start} width="26" height="20" />
           <span>Start</span>
        </div>
        <div className="time">
           <img src={sound} width="17" height="17"/>
           <span>Por Paula Licausi</span>
        </div>
     </div>
    );
 }
export default Footer;
