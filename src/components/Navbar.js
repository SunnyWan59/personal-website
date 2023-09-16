import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


function Navbar(){
    return(
        <div className='navbar'>
            <nav>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/bookshelf">BOOKSHELF</NavLink></li>
                <li><NavLink to="/resume">RESUME</NavLink></li>
            </ul>
            </nav>
        </div>

    )
}

export default Navbar