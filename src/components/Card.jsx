import React from 'react';

import ButtonWithLogo from './ButtonWithLogo';


import  '../styles/Card.scss';


const Card = ({title, subtitle, description, buttons, bottomIcon}) => {

    


    return (
        <div className='Card'>
            <div className='Card-wrapper'>
                <section className='Card-info'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                    
                    <section className='Card-buttons'>
                        {buttons.map(button => (
                            <ButtonWithLogo
                             icon={button.icon}
                             link={button.link}
                             key={button.ref}
                             
                            />
                        ))}
                        
                    </section>
                </section>
                <div className='rocket'>
                    {bottomIcon}
                </div>
            </div>
        </div>
    )
}

export default Card;