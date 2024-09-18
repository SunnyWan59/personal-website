import React from 'react';
import Navbar from '../../components/Navbar';
import './bookshelf.css';

function Bookshelf(){
    return(
        <div className='body'>
            <Navbar/>
            <div id="title"> Book Recomendations</div>
            <hr width="100%" size="3" color="grey"></hr>

            <p>Currently a work in progress!</p>
        </div>
    )
}

export default Bookshelf