import React from 'react';
import '../styles/Home.scss';
import Carousell from '../containers/Carousell';




const Home = () => {
    return(
        <section className='Home'>
            <Carousell/>
        </section>
    );
}

export default Home;