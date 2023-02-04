import React from 'react';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import { ROUTES } from './Constants/routeConstants';
import { IMGLINK } from './Constants/imagelinkConstant';
import About from './Components/About'
import Footer from './Components/Footer';
import PercentageCalculator from './Components/PercentageCalculator';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />}/>
          <Route path={ROUTES.PERCENTAGE_CALCULATOR} element={<PercentageCalculator />} />
        </Routes>
      </div>
       <Footer /> 
    </div>
  );
}

export default App;
