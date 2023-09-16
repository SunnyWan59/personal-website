import React from 'react';
import { Routes, Route,Navigate  } from 'react-router-dom';

import About from '../pages/About/about';
import Bookshelf from '../pages/Bookshelf/bookshelf';
import Resume from '../pages/Resume/resume';
import Home from '../pages/Home/home';

function Main (){
  return (
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route exact path='/about' element={<About></About>}></Route>
      <Route exact path='/bookshelf' element={<Bookshelf></Bookshelf>}></Route>
      <Route exact path='/resume' element={<Resume></Resume>}></Route>
    </Routes>
  );
}

export default Main;