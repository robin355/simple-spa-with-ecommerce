import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" srcset="" />
            <div>
                <a href="/Shoe">Shop</a>
                <a href="/About">Order</a>
                <a href="/Contract">Invited</a>
                <a href="/Buy">About</a>
            </div>

        </nav>
    );
};

export default Header;