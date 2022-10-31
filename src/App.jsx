import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollRestoration } from 'react-router-dom'

import Menu from './components/menu/Menu'
import Home from './components/pages/home/Home';
import AboutMe from './components/pages/aboutMe/AboutMe';
import MyProjects from './components/pages/myProjects/MyProjects';
import Contact from './components/pages/contact/Contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faBars, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

library.add(fas, faBars, faGraduationCap);

export default function App() {
	return (

			<Router>
				<Menu />
				<Routes>
					<Route  exact path='/' element={<Home />}></Route>
					<Route exact path='/aboutMe' element={<AboutMe />}></Route>
					<Route exact path='/myProjects' element={<MyProjects />}></Route>
					<Route exact path='/contact' element={<Contact />}></Route>
				</Routes>
			</Router>

	);
}
