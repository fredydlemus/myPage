import React from 'react';
import '../styles/SocialButton.scss'

const SocialButton = ({icon, link}) =>{
    return(
        <button className='SocialButton'>
            <a href={link} target='_blank'>
                {icon}    
            </a>  
            
        </button>
    );
}

export default SocialButton;