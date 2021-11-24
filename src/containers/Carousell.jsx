import React from 'react';
import Card from '../components/Card';
import fredy from '../data/personalInformation';
import {IoIosRocket} from 'react-icons/io';
import '../styles/Carousell.scss';

const Carousell = () => {
    return (
        <div className='Carousell'>
            <Card
                title='Fredy Flores'
                subtitle='Frontend Developer'
                description={fredy.description}
                buttons={fredy.social_media}
                bottomIcon={<IoIosRocket size='44px'/>}
            />
            <Card
                title='Projects'
                subtitle=''
                description='Here are projects'
                buttons={[]}
                bottomIcon='here are icon'
            />
        </div>
    )
}

export default Carousell;