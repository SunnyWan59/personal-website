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
                        <p>Hello! My name is Sunny and I am a fourth year student studying mathematics at the University of Toronto. 
                            I am currently interested in AI art and aesthetics, exploring questions like: 'What is the Role of AI art in our society?' and
                            'Can AI art be beautiful?'. 
                            Of course, I am always looking for new experiances and exploiring topics that I are outside my comfort zone. 
                            

                        </p>
                        <p>
                            Although I currently live in Toronto, I am originally from the Boston area, spending most of my 
                            childhood there; some of my fondest summers were spent hiking along various mountains and trails
                            of New England. Nowadays though, I spend most of my time reading, working of personal projects and
                            exploring all that Toronto has to offer. 
                        </p>
                        
                        <p>
                            Contact me if anyone is interested in talking!
                            Email me at: sunnywan2020@gmail.com.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default About