import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { FaGithub} from "react-icons/fa";


function Navbar(){
    return(
        <div className='navbar'>
            {/* <h1 class = 'navName'>Sunny Wan</h1>
             */}
             <div class = 'navName'>
             <NavLink to="/">Sunny Wan</NavLink>
                </div>
            <div class = 'navButtons'>
                <div class = 'leftbuttons'>
                <a href="https://github.com/SunnyWan59" className='github'><FaGithub/></a>
                </div>
                <div class = 'rightbuttons'>
                <NavLink to="/contact">Contact Me</NavLink>
                </div>
            </div>
            <nav>
            <ul>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/bookshelf">bookshelf</NavLink></li>
                <li><NavLink to="/resume">writing</NavLink></li>
            </ul>
            </nav>
        </div>

    )
}

export default Navbar