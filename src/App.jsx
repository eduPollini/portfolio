import React from 'react';
import './App.css';

import Body from './Body';
import Menu from './components/menu/Menu'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faBars, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';

library.add(fas, faBars, faGraduationCap);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Body/>
      </Router>
    </div>
  );
}
