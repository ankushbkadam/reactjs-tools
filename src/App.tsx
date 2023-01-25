import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import { ROUTES } from './Constants/routeConstants';
import About from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
