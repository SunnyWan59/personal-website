import React from 'react';
import { FaGithub} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Main from '../../components/Main';


function Home(){
    return(
        <div>
            <div class="topnav">

                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/bookshelf">BOOKSHELF</NavLink>
                <NavLink to="/resume">RESUME</NavLink>
            </div>
            {/* <Main/> */}


            <div className='textbox'>
                <div className='text'>
                    <h1>Sunny Wan</h1>
                    <br></br>
                    <p>Mathematics and Computer Science Student at University of Toronto</p>
                    <br></br>
                    <a href="https://github.com/SunnyWan59" className='github'><FaGithub/></a>
                </div>
                <div className = 'picture'>
                <img src={require('./pfp2.jpg')} alt ='profile picture' width="400" height="350"></img>
                </div>


            </div>
        </div>
    )
}

export default Home