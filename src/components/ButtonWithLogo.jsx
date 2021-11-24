import React from 'react';
import '../styles/ButtonWithLogo.scss'

const ButtonWithLogo = ({icon, link}) =>{
    return(
        <button className='ButtonWithLogo'>
            <a href={link} target='_blank'>
                {icon}    
            </a>  
            
        </button>
    );
}

export default ButtonWithLogo;