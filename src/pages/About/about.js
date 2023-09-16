import React from 'react';
import Navbar from '../../components/Navbar';
import './about.css';
function About(){
    return(
        <div className='body'>
            <Navbar/>

            <div id="title"> About Me</div>
            <hr width="100%" size="3" color="grey"></hr>

            <div id="page">
                <div id="image">
                    {/* This image is 3:2 Asect Ratio */}
                    <img src={require('./20230905_200232.jpg')} alt ='beach picture' width="450" height="300"></img>

                </div>
                <div id="text">
                    <p>Hello! My name is Sunny and I am currently studying mathematics at the University of Toronto.
                        I hope to learn more about how techology, sepcifically artifical intelligence, changes how we 
                        approach problems in the future. 

                    </p>
                    <p>
                        Although I currently live in Toronto, I am originally from the Boston area, spending most of my 
                        childhood there, and some of my fondest memories were hiking along various mountains and trails
                        in New England. Nowadays though, I spend my time reading, working of personal projects and exploring all 
                        that Toronto has to offer. 
                    </p>
                    
                    <p>
                        Contact me if anyone is interested in talking!
                        Email me at: sunnywan2020@gmail.com.

                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default About