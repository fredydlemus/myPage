import React from 'react';
import {FaSadCry} from 'react-icons/fa';
import '../styles/NotFound.scss';

const NotFound = () =>{
    return(
        <section className="NotFound">
            <h2>Error 404, Not Found</h2>
            <h3>Upss! this section doesn't exist D:</h3>
            <FaSadCry size='44px'/>
        </section>
    );
}

export default NotFound;