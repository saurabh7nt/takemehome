import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Whoweare from './Components/Whoweare';
import Ourteam from './Components/Ourteam'
import FAQ from "./Components/FAQ";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='home' element={<Home/>} />
          <Route path='about'>
              <Route path="whoweare" element={<Whoweare/>} />
              <Route path="ourteam" element={<Ourteam/>} />
          </Route>
          <Route path="services" element={<Services/>}/>
          <Route path="faq" element={<FAQ/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
