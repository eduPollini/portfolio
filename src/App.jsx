import React from 'react';
import './App.css';

import Menu from './components/menu/Menu'
import Home from './components/pages/home/Home';
import AboutMe from './components/pages/aboutMe/AboutMe';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faBars, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

library.add(fas, faBars, faGraduationCap);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutMe' element={<AboutMe/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
