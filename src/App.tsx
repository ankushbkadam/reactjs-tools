import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import { ROUTES } from './Constants/routeConstants';
import About from './Components/About';
import Converter from './Components/Rgb-to-Hex/Rgb-to-Hex';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.ABOUT} element={<About />}/>
        <Route path={ROUTES.CONVERTER} element={<Converter />}/>
      </Routes>
    </div>
  );
}

export default App;
