import React from 'react';
import { FaGithub} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import './home.css';


function Home(){
    return(
        <div className='back'>
            <div className='body'>
                <Navbar/>
                <div className='textbox'>
                    <div className='text'>
                        <h1>Sunny Wan</h1>
                        Student at University of Toronto
                        <br></br>
                    </div>
                    <div className = 'picture'>
                    <img src={require('./IMG_9240.jpg')} alt ='profile picture' width="400" height="400"></img>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home