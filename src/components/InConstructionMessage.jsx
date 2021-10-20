import React from 'react'
import '../styles/InConstructionMessage.scss';
import build from '../assets/Icons/under-construction.png';

const InConstructionMessage = () =>{
    return(
        <div className="Message">
            <img src={build} alt="message" />
            <h1>React Site under construction</h1>
            <h2>Comback Soon!!! :D</h2>
            <h3>last update: 20/10/2021</h3>
            <a href="https://github.com/fredyflemus/myPage">Github repository</a>
        </div>
    );
}

export default InConstructionMessage;