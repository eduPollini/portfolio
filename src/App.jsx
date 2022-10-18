import './App.css';
import Header from './Header';
import Body from './Body';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faBars, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faBars, faGraduationCap);

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}
