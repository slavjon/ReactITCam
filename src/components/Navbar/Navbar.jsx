import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <aside className={s.App_aside}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.activeLink} >Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.activeLink} >Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.activeLink} >News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.activeLink} >Music</NavLink></li>
                <li><NavLink to="/setting" activeClassName={s.activeLink} >Settings</NavLink></li>
            </ul>
        </aside>
    );
}

export default Navbar;