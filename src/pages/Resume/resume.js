import React from 'react';
import Navbar from '../../components/Navbar';
import './writing.css';

function Resume(){
    return(
        <div className='back'>
            <div className='body'>
                <Navbar/>
                <div id="title"> Writing</div>
                <hr width="100%" size="3" color="grey"></hr>

                <p>Currently a work in progress!</p>
            </div>
        </div>
    )
}

export default Resume