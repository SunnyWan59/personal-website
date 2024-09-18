import React from 'react';
import { FaGithub} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import './home.css';


function Home(){
    return(
        <div className='body'>
            <Navbar/>
            <div className='textbox'>
                <div className='text'>
                    <h1>Sunny Wan</h1>
                    
                    <p>Student at University of Toronto</p>
                    <br></br>
                </div>
                <div className = 'picture'>
                <img src={require('./pfp2.jpg')} alt ='profile picture' width="400" height="350"></img>
                </div>


            </div>
        </div>
    )
}

export default Home