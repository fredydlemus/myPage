import React from 'react';
import '../styles/Home.scss';
import InConstructionMessage from '../components/InConstructionMessage';

const Home = () => {
    return(
        <section className='Home'>
            <h2>Home</h2>
            <InConstructionMessage />
        </section>
    );
}

export default Home;