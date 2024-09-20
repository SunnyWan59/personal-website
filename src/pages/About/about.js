import React from 'react';
import Navbar from '../../components/Navbar';
import './about.css';
function About(){
    return(
        <div className='back'>
            <div className='body'>
                <Navbar/>

                <div id="title"> About Me</div>
                <hr width="100%" size="3" color="grey"></hr>

                <div id="page">
                    <div id="image">
                        {/* This image is 3:2 Asect Ratio */}
                        <img src={require('./IMG_9938.jpg')} alt ='beach picture' width="500" height="375"></img>

                    </div>
                    <div id="text">
                        <br></br>
                        Hello!
                        <p>
                            Welcome to the website for my personal projects and writing! On here, I will be posting my 
                            writing and creative projects, as well as thoughts on current culture and events. 
                            Although I currently live in Toronto, I am originally from the Boston area, where I spend most of 
                            my childhood summers hiking along various mountains and trails of New England. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default About