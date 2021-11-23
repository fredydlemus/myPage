import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.scss';
import { MdMenu } from "react-icons/md";



const Header = () => {
    return (
        <nav className='Header'>
            <div className='Header_logo'>
                <Link to="/">
                    <p>fredyflemus</p>
                </Link>
                
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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            }
        </nav>
    );
}

export default Header;