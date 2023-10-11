import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Whoweare from './Components/Whoweare/Whoweare';
import Ourteam from './Components/Navbar/Ourteam'
import FAQ from "./Components/Navbar/FAQ";
import Services from "./Components/Navbar/Services";
import Adoption from "./Components/Adoption";

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
          {/* <Route path="adoption" element={<Adoption/>} /> */}
          <Route path="adoption" >
              <Route path=':petName' element={<Adoption/>} />
          </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
