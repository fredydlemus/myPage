import React from 'react';

import '../styles/Header.scss';
import { MdMenu } from "react-icons/md";



const Header = () => {
    return (
        <nav className='Header'>
            <div className='Header_logo'>
                
                    <p>fredyflemus</p>
                
                
            </div>
            <div className='MenuIcon'>
                <MdMenu
                   color='black'
                    size='35px'
                />
            </div>
            
            {
                <nav className='Header_navbar'>
                <ul>
                    <li>|</li>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </nav>
            }
        </nav>
    );
}

export default Header;