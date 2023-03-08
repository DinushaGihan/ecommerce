import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Payments from './components/pages/Payments';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/namelist" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
