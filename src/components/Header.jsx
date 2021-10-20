import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <nav className='Header'>
            <div className='Header_logo'>
                <a href="/">
                    <p>fredyflemus</p>
                </a>
                
            </div>
            <nav className='Header_navbar'>
                <ul>
                    <li>|</li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </nav>
    );
}

export default Header;