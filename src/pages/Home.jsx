import React from 'react';
import '../styles/Home.scss';
import InConstructionMessage from '../components/InConstructionMessage';
import SocialButton from '../components/SocialButton';
import Photo from '../assets/me2021.jpg';

const Home = () => {
    return(
        <section className='Home'>
            <div className='Hero-wrapper'>
                <section className='Hero-info'>
                    <h1>Fredy Flores</h1>
                    <h2>Frontend Developer</h2>
                    <p>Hello!, I'm Fredy Flores and I'm a Frontend Developer passionate about build <a href='/'>products and solutions</a> using the web technologies.<br>
                    </br>
                    </p>
                    
                    <section className='Hero-social-media'>
                        <SocialButton />
                        <SocialButton />
                        <SocialButton />
                        <SocialButton />
                    </section>
                </section>
                <div className='Hero-photo'>
                    <img  src={Photo} alt="Fredy's photo" />
                </div>
                
            </div>
        </section>
    );
}

export default Home;