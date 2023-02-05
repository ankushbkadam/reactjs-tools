import React from 'react';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import { ROUTES } from './Constants/routeConstants';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar/>
      <div>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />}/>
        </Routes>
      </div>
       <Footer/> 
    </div>
  );
}
export default App;
