import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
    return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    </header>
    );
}

export default Header;